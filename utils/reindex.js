require('dotenv').config();

async function reindex() {
  const BASIC_AUTH = `${process.env.CRAWLER_USER_ID}:${process.env.CRAWLER_API_KEY}`;
  const BASE64_BASIC_AUTH = `Basic ${Buffer.from(BASIC_AUTH).toString('base64')}`;
  const CRAWLER_ID = process.env.CRAWLER_ID;

  try {
    const response = await fetch(
      `https://crawler.algolia.com/api/1/crawlers/${CRAWLER_ID}/reindex`,
      {
        method: 'POST',
        headers: {
          Authorization: BASE64_BASIC_AUTH,
          'Content-Type': 'application/json'
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to reindex crawler: ${response.statusText}`);
    }

    console.log('Crawler reindexed successfully');
  } catch (e) {
    console.error(e);
  }
}

reindex();
