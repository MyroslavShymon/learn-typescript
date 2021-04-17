const dmitro = {
    name: "Dmitro",
    password: "Dmitro",
    age: 18,
    surname: "Grigorov",
};
console.log("dmitro", dmitro);
class User {
    constructor(name, password, surname, age) {
        this.name = name;
        this.password = password;
        this.surname = surname;
        this.age = age;
    }
    getData() {
        return `${this.name}${this.surname}${this.age}`;
    }
}
class UserAdmin {
    constructor(name, password, surname, age) {
        this.name = name;
        this.password = password;
        this.surname = surname;
        this.age = age;
    }
    getData() {
        return `${this.name}${this.surname}${this.age}`;
    }
    getPass() {
        console.log(this.password);
    }
}
export { User, UserAdmin };
//# sourceMappingURL=interfaces.js.map