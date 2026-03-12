import fs from 'fs';
import path from 'path';
import http from 'http';
import {fileURLToPath} from 'url';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BUILD_DIR = path.resolve(__dirname, '..', 'build');
const OG_IMAGES_DIR = path.join(BUILD_DIR, 'og-images');
const SITE_URL = 'https://docs.monei.com';
const PORT = 9123;
const CONCURRENCY = 3;
const VIEWPORT = {width: 1200, height: 630};
const JPEG_QUALITY = 80;

const SKIP_PREFIXES = ['/apis/rest/', '/apis/graphql/'];

function findHtmlFiles(dir, base = dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findHtmlFiles(full, base));
    } else if (entry.name === 'index.html') {
      results.push(full);
    }
  }
  return results;
}

function getPagePath(htmlFile) {
  const rel = path.relative(BUILD_DIR, path.dirname(htmlFile));
  return rel === '' ? '/' : '/' + rel.replace(/\\/g, '/') + '/';
}

function shouldSkip(pagePath) {
  return SKIP_PREFIXES.some((prefix) => pagePath.startsWith(prefix));
}

function extractOgImage(html) {
  const m =
    html.match(/<meta[^>]*property="og:image"[^>]*content="([^"]*)"/) ||
    html.match(/<meta[^>]*content="([^"]*)"[^>]*property="og:image"/) ||
    html.match(/<meta[^>]*property=og:image[\s/>][^>]*content=([^\s>]+?)(?=\s|\/?>)/) ||
    html.match(/<meta[^>]*content=([^\s>]+?)(?=\s|\/?>)[^>]*property=og:image[\s/>]/);
  return m ? m[1] : '';
}

function hasExistingOgImage(html) {
  return extractOgImage(html) !== '';
}

function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      try {
        let filePath = path.resolve(path.join(BUILD_DIR, decodeURIComponent(req.url || '/')));
        if (!filePath.startsWith(path.resolve(BUILD_DIR))) {
          res.writeHead(403);
          res.end();
          return;
        }
        if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
          filePath = path.join(filePath, 'index.html');
        }
        if (!fs.existsSync(filePath)) {
          res.writeHead(404);
          res.end();
          return;
        }
        const ext = path.extname(filePath).toLowerCase();
        const mimeTypes = {
          '.html': 'text/html',
          '.js': 'application/javascript',
          '.css': 'text/css',
          '.json': 'application/json',
          '.png': 'image/png',
          '.jpg': 'image/jpeg',
          '.svg': 'image/svg+xml',
          '.woff': 'font/woff',
          '.woff2': 'font/woff2'
        };
        res.writeHead(200, {'Content-Type': mimeTypes[ext] || 'application/octet-stream'});
        const stream = fs.createReadStream(filePath);
        stream.on('error', () => {
          res.writeHead(500);
          res.end();
        });
        stream.pipe(res);
      } catch {
        res.writeHead(500);
        res.end();
      }
    });
    server.listen(PORT, () => resolve(server));
  });
}

function ogImagePath(pagePath) {
  const slug = pagePath === '/' ? 'index' : pagePath.replace(/^\/|\/$/g, '');
  const dir = path.join(OG_IMAGES_DIR, path.dirname(slug));
  const file = path.basename(slug) + '.jpg';
  return {dir, file, full: path.join(dir, file)};
}

function ogImageUrl(pagePath) {
  const slug = pagePath === '/' ? 'index' : pagePath.replace(/^\/|\/$/g, '');
  return `${SITE_URL}/og-images/${slug}.jpg`;
}

function replaceMetaContent(html, attrName, attrValue, newContent) {
  const esc = attrValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const patterns = [
    new RegExp(
      `(<meta[^>]*${attrName}="${esc}"[^>]*content=")[^"]*(")`,'g'
    ),
    new RegExp(
      `(<meta[^>]*content=")[^"]*("[^>]*${attrName}="${esc}")`,'g'
    ),
    new RegExp(
      `(<meta[^>]*${attrName}=${esc}(?=[\\s/>])[^>]*content=)[^\\s>]+?(?=\\s|\\/?>)`,'g'
    ),
    new RegExp(
      `(<meta[^>]*content=)[^\\s>]+?(?=\\s|\\/?>)([^>]*${attrName}=${esc}(?=[\\s/>]))`,'g'
    )
  ];
  html = html.replace(patterns[0], `$1${newContent}$2`);
  html = html.replace(patterns[1], `$1${newContent}$2`);
  html = html.replace(patterns[2], `$1"${newContent}"`);
  html = html.replace(patterns[3], `$1"${newContent}"$2`);
  return html;
}

function injectOgImage(htmlFile, imageUrl) {
  let html = fs.readFileSync(htmlFile, 'utf-8');

  if (hasExistingOgImage(html)) {
    html = replaceMetaContent(html, 'property', 'og:image', imageUrl);
    html = replaceMetaContent(html, 'name', 'twitter:image', imageUrl);
  } else {
    const ogImageTag = `<meta property="og:image" content="${imageUrl}"/>`;
    const twitterImageTag = `<meta name="twitter:image" content="${imageUrl}"/>`;
    const insertTags = ogImageTag + twitterImageTag;

    const ogDescMatch = html.match(
      /<meta[^>]*property=["']?og:description["']?[^>]*\/?\s*>/
    );
    if (ogDescMatch) {
      const insertPos = ogDescMatch.index + ogDescMatch[0].length;
      html = html.slice(0, insertPos) + insertTags + html.slice(insertPos);
    } else {
      html = html.replace('</head>', insertTags + '</head>');
    }
  }

  fs.writeFileSync(htmlFile, html, 'utf-8');
}

async function screenshotPage(page, htmlFile, pagePath) {
  const url = `http://localhost:${PORT}${pagePath}`;
  try {
    await page.goto(url, {waitUntil: 'networkidle2', timeout: 30000});
  } catch {
    console.warn(`  ⚠ timeout loading ${pagePath}, taking screenshot anyway`);
  }

  await page.evaluate(() => {
    document.querySelectorAll(
      '#CybotCookiebotDialog, #CybotCookiebotDialogBodyUnderlay'
    ).forEach((el) => el.remove());
  });

  const {dir, full} = ogImagePath(pagePath);
  fs.mkdirSync(dir, {recursive: true});

  try {
    await page.screenshot({path: full, type: 'jpeg', quality: JPEG_QUALITY});
  } catch (err) {
    console.warn(`  ⚠ screenshot failed for ${pagePath}: ${err.message}`);
    return false;
  }

  const imageUrl = ogImageUrl(pagePath);
  injectOgImage(htmlFile, imageUrl);
  return true;
}

async function run() {
  console.log('Generating OG images for docs...');
  const allHtml = findHtmlFiles(BUILD_DIR);
  console.log(`Found ${allHtml.length} HTML pages total`);

  const toScreenshot = [];
  let skipped = 0;

  for (const htmlFile of allHtml) {
    const pagePath = getPagePath(htmlFile);
    if (shouldSkip(pagePath)) {
      skipped++;
      continue;
    }
    toScreenshot.push({htmlFile, pagePath});
  }

  console.log(`  ${toScreenshot.length} pages to screenshot`);
  console.log(`  ${skipped} API pages skipped`);

  const server = await startServer();
  console.log(`Local server on port ${PORT}`);

  const browser = await puppeteer.launch({
    headless: true,
    protocolTimeout: 120_000,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu']
  });

  const tabs = await Promise.all(
    Array.from({length: CONCURRENCY}, () =>
      browser.newPage().then(async (p) => {
        await p.setViewport(VIEWPORT);
        return p;
      })
    )
  );

  let processed = 0;
  let failed = 0;
  let idx = 0;

  async function worker(tab) {
    while (idx < toScreenshot.length) {
      const i = idx++;
      const {htmlFile, pagePath} = toScreenshot[i];
      try {
        const ok = await screenshotPage(tab, htmlFile, pagePath);
        if (ok) {
          processed++;
          if (processed % 20 === 0) console.log(`  ${processed} pages screenshotted...`);
        } else {
          failed++;
        }
      } catch (err) {
        failed++;
        console.warn(`  ⚠ unexpected error on ${pagePath}: ${err.message}`);
      }
    }
  }

  await Promise.all(tabs.map(worker));
  await browser.close();
  server.close();
  console.log(`Done: ${processed} screenshots, ${failed} failed`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
