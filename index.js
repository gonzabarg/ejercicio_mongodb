const express = require('express');

const app = express();

const router = require('./routes');

const port = 8000;


app.set('view engine', 'ejs');

app.use(router);

app.listen(port);