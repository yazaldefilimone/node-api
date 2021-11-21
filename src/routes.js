const { heroFactory } =require("./factories/heroFactory.js")
const  Hero =require("./entities/hero.js");
const DEFAULT_HEADER = { "Content-Type":"application/json"}
module.exports = {
  "/heroes:get": async (request, response) => {
    const { id } = request.queryString;
    const data = await heroFactory().find(id);
    response.write (JSON.stringify (data));
    response.end();

  },
  "/heroes:post": async (request, response) => {
    //async iterator
    for await (const data of request){
      const item = JSON.parse (data);

      const hero = new Hero(item);

      const { error, valid } = hero.isValidate()


      console.log (valid, error)
      if(!valid){
        response.writeHead(401, DEFAULT_HEADER);
        response.write(JSON.stringify({error: error.join(',')}))
        return response.end();
      }
      const id = await heroFactory().create(hero);  
      response.writeHead(201, DEFAULT_HEADER);
      response.write(JSON.stringify({ response: "sucesses created user", id}))
      response.end();
    }
  },

  default:(request, response) => {
    response.write ("invalide route");
    response.end();
  }
}
