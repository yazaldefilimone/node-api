class heroServices{
  constructor ({ Repository }){
    this.heroRepository = Repository;
  }

  async find (_id){
    return await this.heroRepository.find(_id);
  }
  
  async create (data){
    return await this.heroRepository.create(data);
  }

}

module.exports = { heroServices }
