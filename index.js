const express = require('express');
const fetch = require('node-fetch');
const app = express();

const TOKENS = process.env.PROXY_TOKENS ? process.env.PROXY_TOKENS.split(',') : null;

app.get('/', async (req, res) => {
  const targetUrl = req.query.url;
  const token = req.query.token;

  if (!targetUrl) return res.status(400).send('Missing url parameter');

  if (TOKENS && (!token || !TOKENS.includes(token))) {
    return res.status(403).send('Forbidden: Invalid or missing token');
  }

  try {
    const response = await fetch(targetUrl);
    const data = await response.text();
    res.set('Content-Type', response.headers.get('content-type') || 'text/plain');
    res.send(data);
  } catch (err) {
    res.status(500).send('Error fetching URL: ' + err.message);
  }
});

module.exports = app;