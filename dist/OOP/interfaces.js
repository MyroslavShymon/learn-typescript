"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAdmin = exports.User = void 0;
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
exports.User = User;
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
exports.UserAdmin = UserAdmin;
//# sourceMappingURL=interfaces.js.map