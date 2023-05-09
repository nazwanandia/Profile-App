// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send("Welcome to Profile App");
// });

// app.listen(5000, () => {
//     console.log("listening to port 5000");
// })

var http = require("http");
var url = require("url");
var fs = require("fs");

http
    .createServer(function (req, res) {
        var a = url.parse(req.url, true);
        var file = "." + a.pathname;

        fs.readFile(file, function (error, data){
            if (error) {
                res.writeHead(404, {"Content-Type": "text/html"});
                return res.end("Welcome to App Profile");
            }
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            return res.end();
        });
    })
    .listen(5000);
console.log("server is running on http://localhost:5000");