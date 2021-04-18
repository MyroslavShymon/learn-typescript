abstract class AllUser {
  constructor(
    public name: string,
    public username: string,
    public surname: string,
    public age: number
  ) {}
  greet(): void {
    console.log(this.name);
  }
  abstract getPass(): void;
}
class User4 {
  static secret: string = "Shymon";
  constructor(
    public name: string,
    public surname: string,
    public age: number,
    protected nickname: string = ""
  ) {}
  getUser(): string {
    return `User 4 has some properties like: ${this.name}${this.surname}${this.age} and secret key is ${User4.secret}`;
  }
}
const user4 = new User4("David", "Abramov", 34);
const user4_2 = new User4("aergaer", "gqergqer", 34, "gqergqer");
console.log("User 4 is", user4.getUser, "secret key", User4.secret);

class Myroslav extends AllUser {
  public married: boolean;
  constructor(
    name: string = "Myroslav",
    username: string,
    surname: string,
    age: number,
    married: boolean
  ) {
    super(name, username, surname, age);
    this.married = married;
  }
  getPass() {
    console.log("GetPass");
  }
}
const myros = new Myroslav("Myros", "myrosBronshtein", "Bronshtein", 18, false);
myros.greet();
myros.getPass();
console.log("myros", myros);
