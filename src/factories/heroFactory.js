const { heroRepository  } = require("../repositories/heroRepository.js");
const { heroServices } = require("../services/heroServices.js");
const { join } = require("path");

const dirname = join(__dirname, "../../database/data.json");
const heroFactory = () => {
  const Repository = new heroRepository({ file: dirname });
  
  const heroservices = new heroServices({ Repository });

  return heroservices;
}



//heroFactory().find ().then (console.log)
module.exports = { heroFactory }
