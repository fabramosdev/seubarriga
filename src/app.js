const express = require('express');

const app = express();

const consign = require('consign');

consign({ cwd: 'src', verbose: false })
  .include('./config/middlewares.js')
  .then('./routes')
  .then('./config/routes.js')
  .into(app);

app.get('/', async (req, res) => {
  res.status(200).send();
});

module.exports = app;