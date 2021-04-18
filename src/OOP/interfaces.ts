//може наслідуватись і розширятись використовується тільки для об'єктів і класів
interface IUser {
  readonly name: string;
  readonly password: string;
  age?: number;
  [propName: string]: any;
}

interface IUserClass {
  getData(): string;
}

interface IAdminClass extends IUserClass {
  getPass(): void;
}

const dmitro: IUser = {
  name: "Dmitro",
  password: "Dmitro",
  age: 18,
  surname: "Grigorov",
};

type User1 = {
  name: string;
  age: number;
};
console.log("dmitro", dmitro);

class User implements IUser, IUserClass {
  name: string;
  password: string;
  surname: string;
  age: number;
  constructor(name: string, password: string, surname: string, age: number) {
    this.name = name;
    this.password = password;
    this.surname = surname;
    this.age = age;
  }
  getData(): string {
    return `${this.name}${this.surname}${this.age}`;
  }
}
class UserAdmin implements IUser, IAdminClass {
  constructor(
    public name: string,
    public password: string,
    public surname: string,
    public age: number
  ) {}
  getData(): string {
    return `${this.name}${this.surname}${this.age}`;
  }
  getPass(): void {
    console.log(this.password);
  }
}

export { User, User1, UserAdmin };
export default User1;
