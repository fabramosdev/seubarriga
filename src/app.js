const express = require('express');

const app = express();

const consign = require('consign');
const knex = require('knex');
// const knexlogger = require('knex-logger');
const knexfile = require('../knexfile');

// TODO = Criar chaveamento dinamico
app.db = knex(knexfile.test);
// app.use(knexlogger(app.db));

consign({ cwd: 'src', verbose: false })
  .include('./config/middlewares.js')
  .then('./routes')
  .then('./config/routes.js')
  .into(app);

app.get('/', async (req, res) => {
  res.status(200).send();
});

module.exports = app;
