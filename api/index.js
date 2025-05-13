const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const { url, token } = req.query;
  const allowedTokens = process.env.PROXY_TOKENS?.split(',').map(t => t.trim());

  if (!url) {
    res.status(400).send('Missing "url" parameter');
    return;
  }

  if (allowedTokens && allowedTokens.length > 0 && !allowedTokens.includes(token)) {
    res.status(403).send('Forbidden: Invalid token');
    return;
  }

  try {
    const response = await fetch(url);
    const data = await response.text();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', response.headers.get('content-type') || 'text/plain');
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send('Error fetching URL: ' + err.message);
  }
};
