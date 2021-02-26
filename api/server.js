const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const port = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

app.listen(port);
console.log('conectado na porta ' + port);
