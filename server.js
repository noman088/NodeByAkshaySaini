const http = require("node:http");
const { url } = require("node:inspector");
const server = http.createServer(function (req, res) {
    if (req.url === "/getSecretData") {
        res.end("There is any secret data");
    }

    res.end("Hello World!");
});
server.listen(7777);
