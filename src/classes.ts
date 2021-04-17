class User {
  public name: string;
  private _age: number;
  protected nickName: string;
  readonly password: string;

  constructor(name: string, age: number, nickName: string, password: string) {
    this.name = name;
    this._age = age;
    this.nickName = nickName;
    this.password = password;
  }

  public get age(): number {
    return this._age;
  }
}
const myroslav = new User("Myroslav", 18, "Shymon", "sdfdfg");
console.log("class User", myroslav);

class User2 {
  constructor(
    public username: string,
    public age: number,
    public name: string,
    public surname: string
  ) {}

  getUser2(): string {
    return `Default name and surname of User2 are ${this.name}${this.surname} other are ${this.username} ${this.age}`;
  }
}

const user2 = new User2("regwert", 32, "dsvr", "SER");
console.log("class User2", user2);

class User3 {
  private _age: number = 0;

  public setAge(age: number) {
    this._age = age;
  }
  public get age(): number {
    return this._age;
  }
  public set age(age: number) {
    this._age = age || 0;
  }
}

const someUser3 = new User3();
console.log("age1", someUser3.age);
//someUser3.age = 20;
someUser3.setAge(24);
console.log("age", someUser3.age);
console.log("class User3", someUser3);
