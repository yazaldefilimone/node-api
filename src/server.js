const routes = require("./routes.js");
const serverError = require("./serverError.js");

 const server = (request, response) => {
  const DEFAULT_HEADER = { "Content-Type":"application/json"}
  const { url, method } = request;
  const [ frist, route, id] = url.split("/");

  request.queryString = { id : isNaN(id) ? id : Number(id) }


  const key = `/${route}:${method.toLowerCase()}`;

  const choose = routes[key] || routes.default;

  response.writeHead(200, DEFAULT_HEADER);

  return choose(request, response).catch(serverError(response, DEFAULT_HEADER));

  response.end()
}

module.exports = server
