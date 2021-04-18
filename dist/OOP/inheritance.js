"use strict";
class AllUser {
    constructor(name, username, surname, age) {
        this.name = name;
        this.username = username;
        this.surname = surname;
        this.age = age;
    }
    greet() {
        console.log(this.name);
    }
}
class User4 {
    constructor(name, surname, age, nickname = "") {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.nickname = nickname;
    }
    getUser() {
        return `User 4 has some properties like: ${this.name}${this.surname}${this.age} and secret key is ${User4.secret}`;
    }
}
User4.secret = "Shymon";
const user4 = new User4("David", "Abramov", 34);
const user4_2 = new User4("aergaer", "gqergqer", 34, "gqergqer");
console.log("User 4 is", user4.getUser, "secret key", User4.secret);
class Myroslav extends AllUser {
    constructor(name = "Myroslav", username, surname, age, married) {
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
//# sourceMappingURL=inheritance.js.map