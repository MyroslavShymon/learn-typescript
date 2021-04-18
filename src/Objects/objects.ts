type Person = {
  name: string;
  age: number;
  nickName: string;
  getFullUser?: () => string;
};

let user: Person = {
  name: "Myroslav",
  age: 18,
  nickName: "Shymon",
};
let admin: Person = {
  name: "Egor",
  age: 33,
  nickName: "Letov",
  getFullUser(): string {
    return `${this.name}${this.age}${this.nickName}`;
  },
};
