const express = require("express");
const proxyMiddleware = require("http-proxy-middleware");

var app = express();

app.use("/api", proxyMiddleware("http://localhost:3100"));
app.use("/", proxyMiddleware("http://localhost:1234"));

app.listen(3800);



// dummy

var dummyApp = express()

dummyApp.use('/api', (req,res)=>{
    res.send({value: "something"})
})

dummyApp.listen(3100)