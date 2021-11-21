class Hero {
  constructor ({ name, age, power }){
    this.name = name;
    this.age = age;
    this.power = power;
    this.id = Math.floor((Math.random () + 100) * Date.now());
  }

  isValidate(){
    const proprety = Object.getOwnPropertyNames(this);
    const propretyValide = proprety.map ( p => (!!this[p] ? null : `${p} is missing`)).filter( i => !!i);


    return {
      valid: propretyValide.length ===0,
      error: propretyValide
    }
  }

}


module.exports = Hero
