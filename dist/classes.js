class User {
    constructor(name, age, nickName, password) {
        this.name = name;
        this._age = age;
        this.nickName = nickName;
        this.password = password;
    }
    get age() {
        return this._age;
    }
}
const myroslav = new User("Myroslav", 18, "Shymon", "sdfdfg");
console.log("class User", myroslav);
class User2 {
    constructor(username, age, name, surname) {
        this.username = username;
        this.age = age;
        this.name = name;
        this.surname = surname;
    }
    getUser2() {
        return `Default name and surname of User2 are ${this.name}${this.surname} other are ${this.username} ${this.age}`;
    }
}
const user2 = new User2("regwert", 32, "dsvr", "SER");
console.log("class User2", user2);
class User3 {
    constructor() {
        this._age = 0;
    }
    setAge(age) {
        this._age = age;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        this._age = age || 0;
    }
}
const someUser3 = new User3();
console.log("age1", someUser3.age);
someUser3.setAge(24);
console.log("age", someUser3.age);
console.log("class User3", someUser3);
//# sourceMappingURL=classes.js.map