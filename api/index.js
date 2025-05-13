const fetch = require('node-fetch');

/**
 * 通用代理接口：支持 API、网页等请求转发
 * 使用方式：https://your-vercel-app.vercel.app/?url=https://example.com
 */
module.exports = async (req, res) => {
  const targetUrl = req.query.url;

  if (!targetUrl) {
    res.status(400).send('Missing url parameter');
    return;
  }

  try {
    const response = await fetch(targetUrl);
    const data = await response.text();

    res.setHeader('Content-Type', response.headers.get('content-type') || 'text/plain');
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send('Error fetching URL: ' + err.message);
  }
};
