class User4 {
  public static secret: string = "Shymon";
  constructor(
    public name: string,
    public surname: string,
    public age: number,
    protected nickname: string = ""
  ) {}
  getUser() {
    return `User 4 has some properties like: ${this.name}${this.surname}${this.age} and secret key is ${User4.secret}`;
  }
}
const user4 = new User4("David", "Abramov", 34);
console.log("User 4 is", user4.getUser, "secret key", User4.secret);

// class Myroslav extends User4 {
//   public name: string = "Myroslav";
//   constructor(surname: string, age: number, nickname: string) {
//     super(name, surname, age, nickname);
//   }
// }
// const user4_2 = new User4("aergaer", "gqergqer", 34, "gqergqer");
// const myros = new Myroslav("gqergqer", 34, "gqergqer");
