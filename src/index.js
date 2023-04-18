const express = require('express');
const app = express();
const routes = require('./routes');
require('dotenv').config();

const protocol = process.env.PROTOCOL || "http"
const ip = require('ip').address()
const port = process.env.PORT || 3030

app.use(routes)

app.listen(port, ()=> console.log(`
    Server started in http://localhost:${port} or ${protocol}://${ip}:${port}
`));