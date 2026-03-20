const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://docs.monei.com';
const OG_DIR = 'og-images';
const WIDTH = 1200;
const HEIGHT = 630;
const SKIP_PREFIXES = ['/apis/rest/', '/apis/graphql/'];
const LOGO_SVG = fs.readFileSync(
  path.join(__dirname, '..', 'static', 'img', 'monei-logo.svg'),
  'utf-8'
);
const LOGO_DATA_URI = `data:image/svg+xml;base64,${Buffer.from(LOGO_SVG).toString('base64')}`;

function shouldSkip(permalink) {
  return SKIP_PREFIXES.some((p) => permalink.startsWith(p));
}

function renderCard(title, description, breadcrumb) {
  const h = require('react').createElement;
  return h(
    'div',
    {
      style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        padding: '60px 80px',
        backgroundColor: '#f8f5fc',
        fontFamily: 'Inter'
      }
    },
    breadcrumb &&
      h(
        'div',
        {style: {display: 'flex', fontSize: 20, color: '#7c5696', letterSpacing: '0.02em'}},
        breadcrumb
      ),
    h(
      'div',
      {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          flex: 1,
          justifyContent: 'center'
        }
      },
      h(
        'div',
        {
          style: {
            display: 'flex',
            fontSize: 52,
            fontWeight: 600,
            color: '#1a1a2e',
            lineHeight: 1.2,
            letterSpacing: '-0.02em'
          }
        },
        title.length > 60 ? title.slice(0, 57) + '...' : title
      ),
      description &&
        h(
          'div',
          {style: {display: 'flex', fontSize: 24, color: '#555', lineHeight: 1.4}},
          description
        )
    ),
    h(
      'div',
      {style: {display: 'flex', alignItems: 'center', justifyContent: 'space-between'}},
      h('img', {src: LOGO_DATA_URI, width: 140, height: 31, style: {display: 'flex'}}),
      h('div', {style: {display: 'flex', fontSize: 18, color: '#999'}}, 'docs.monei.com')
    )
  );
}

function findHtmlFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...findHtmlFiles(full));
    else if (entry.name === 'index.html') results.push(full);
  }
  return results;
}

function getPagePath(htmlFile, buildDir) {
  const rel = path.relative(buildDir, path.dirname(htmlFile));
  return rel === '' ? '/' : '/' + rel.replace(/\\/g, '/') + '/';
}

function extractTitle(html) {
  const m = html.match(/<title[^>]*>([^<]*)<\/title>/);
  if (!m) return null;
  return m[1]
    .replace(/\s*\|.*$/, '')
    .replace(/\s*[-–].*$/, '')
    .trim();
}

function extractDescription(html) {
  const m =
    html.match(/<meta[^>]*name=["']?description["']?[^>]*content="([^"]*)"/) ||
    html.match(/<meta[^>]*content="([^"]*)"[^>]*name=["']?description["']?/);
  return m ? m[1] : null;
}

function injectOgImage(html, imageUrl) {
  const ogTag = `<meta property="og:image" content="${imageUrl}"/>`;
  const twTag = `<meta name="twitter:image" content="${imageUrl}"/>`;

  // Replace existing og:image
  if (html.includes('og:image')) {
    html = html.replace(/<meta[^>]*property="og:image"[^>]*\/?>/, ogTag);
  } else {
    html = html.replace('</head>', ogTag + '</head>');
  }

  // Replace existing twitter:image
  if (html.includes('twitter:image')) {
    html = html.replace(/<meta[^>]*name="twitter:image"[^>]*\/?>/, twTag);
  } else {
    html = html.replace('</head>', twTag + '</head>');
  }

  return html;
}

module.exports = function ogImagesPlugin() {
  return {
    name: 'og-images',
    async postBuild({outDir}) {
      const satori = (await import('satori')).default;
      const {Resvg} = await import('@resvg/resvg-js');

      const fontsDir = path.join(__dirname, '..', 'static', 'fonts');
      const fonts = [
        {
          name: 'Inter',
          data: fs.readFileSync(path.join(fontsDir, 'Inter-Regular.ttf')),
          weight: 400,
          style: 'normal'
        },
        {
          name: 'Inter',
          data: fs.readFileSync(path.join(fontsDir, 'Inter-SemiBold.ttf')),
          weight: 600,
          style: 'normal'
        }
      ];

      const ogDir = path.join(outDir, OG_DIR);
      fs.mkdirSync(ogDir, {recursive: true});

      const htmlFiles = findHtmlFiles(outDir);
      let generated = 0;
      let skipped = 0;

      for (const htmlFile of htmlFiles) {
        const pagePath = getPagePath(htmlFile, outDir);
        if (shouldSkip(pagePath)) {
          skipped++;
          continue;
        }

        const html = fs.readFileSync(htmlFile, 'utf-8');
        const title = extractTitle(html) || 'MONEI Documentation';
        const description = extractDescription(html);
        const parts = pagePath.replace(/^\/|\/$/g, '').split('/');
        const breadcrumb = parts.length > 1 ? parts.slice(0, -1).join(' › ') : null;

        const svg = await satori(renderCard(title, description, breadcrumb), {
          width: WIDTH,
          height: HEIGHT,
          fonts
        });
        const resvg = new Resvg(svg, {fitTo: {mode: 'width', value: WIDTH}});
        const png = resvg.render().asPng();

        const slug = pagePath === '/' ? 'index' : pagePath.replace(/^\/|\/$/g, '');
        const imgDir = path.join(ogDir, path.dirname(slug));
        fs.mkdirSync(imgDir, {recursive: true});
        const imgFile = path.join(imgDir, path.basename(slug) + '.png');
        fs.writeFileSync(imgFile, png);

        const imageUrl = `${SITE_URL}/${OG_DIR}/${slug}.png`;
        const updatedHtml = injectOgImage(html, imageUrl);
        fs.writeFileSync(htmlFile, updatedHtml);

        generated++;
        if (generated % 50 === 0) console.log(`  ${generated} OG images generated...`);
      }

      console.log(`OG images: ${generated} generated, ${skipped} skipped (API docs)`);
    }
  };
};
