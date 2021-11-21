const { readFile, writeFile } = require("fs").promises


class heroRepository {
  constructor({ file }){
    this.file = file;
  }

  async _currentFileContent (){
    return JSON.parse(await readFile(this.file));
  }
  async find(_id){
    const all = await this._currentFileContent()

    if (!_id) {
      return all
    }

    return all.find( ({ id }) => _id === id);
  }

  async create (data){
    const all = await this._currentFileContent();

    all.push(data);

    await writeFile(this.file, JSON.stringify(all));

    return data.id;
  }
}


module.exports = { heroRepository }
//new heroRepository( {file:"../../database/data.json"}).find().then(i => console.log (i));
//new heroRepository( {file:"../../database/data.json"}).create({ id:2, name:"vilton"}).then(console.log);
