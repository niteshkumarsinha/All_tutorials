const fs = require("fs");
const http = require("http");
const url = require("url");

const json = fs.readFileSync(`${__dirname}/data/data.json`, "utf-8");
const laptopData = JSON.parse(json);

const server = http.createServer(function(req, res) {
  const pathName = url.parse(req.url, true).pathname;
  const id = url.parse(req.url, true).query.id;

  if (pathName == "/products" || pathName === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("This is the Products Page");
  } else if (pathName === "/laptop" && id < laptopData.length) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`This is the laptop page for laptop ${id}`);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("URL not found");
  }
});

server.listen(1337, "127.0.0.1", function() {
  console.log("Started listening requests");
});
