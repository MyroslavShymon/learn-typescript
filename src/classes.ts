class User {
  public name: string;
  private age: number;
  protected nickName: string;
  readonly password: string;

  constructor(name: string, age: number, nickName: string, password: string) {
    this.name = name;
    this.age = age;
    this.nickName = nickName;
    this.password = password;
  }
}
const myroslav = new User("Myroslav", 18, "Shymon", "sdfdfg");
console.log("class User", myroslav);
