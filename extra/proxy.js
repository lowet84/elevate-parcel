const express = require("express");
const proxyMiddleware = require("http-proxy-middleware");

var app = express();

app.use("/api", proxyMiddleware("http://localhost:3000"));
app.use("/", proxyMiddleware("http://localhost:1234"));

app.listen(3800);
