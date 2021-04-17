const addString = (constructor: Function): any => {
  console.log(constructor);
  // const newConstructor: Function = function (
  //   name: string,
  //   surname: string,
  //   lang: string
  // ) {
  //   this.name = `Programmers ${name}`;
  //   this.surname = `Programmers ${surname}`;
  //   this.lang = `Programmers ${lang}`;
  // };
  // return newConstructor;
};

const logMethod = (
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) => {
  console.log("logMethod propertyKey", propertyKey);
};

const logGet = (
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) => {
  console.log("logGet propertyKey", propertyKey);
};

const decoratorOfField = (target: Object, propertyKey: string | symbol) => {
  console.log("Target ", target, " Property key ", propertyKey);
};

@addString
class Programmer {
  @decoratorOfField
  protected _name: string;

  constructor(name: string, public surname: string, public lang: string) {
    this._name = name;
  }
  @logMethod
  getProgrammer(): string {
    return `${this._name} ${this.surname} ${this.lang}`;
  }
  @logGet
  get name() {
    return this._name;
  }
}

const egor = new Programmer("Egor", "Zaleskiy", "php");
console.log(egor);
console.log(egor.getProgrammer());
