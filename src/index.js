const http = require("http");
const port = 3003;
const server = require("./server.js");

http.createServer(server).listen(port, _=> console.log("server runnn at port ", port));
