var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const addString = (constructor) => {
    const newConstructor = function (name, surname, lang) {
        this.name = `Programmers ${name}`;
        this.surname = `Programmers ${surname}`;
        this.lang = `Programmers ${lang}`;
    };
    return newConstructor;
};
let Programmer = class Programmer {
    constructor(name, surname, lang) {
        this.name = name;
        this.surname = surname;
        this.lang = lang;
    }
    getProgrammer() {
        return `${this.name} ${this.surname} ${this.lang}`;
    }
};
Programmer = __decorate([
    addString
], Programmer);
const egor = new Programmer("Egor", "Zaleskiy", "php");
console.log(egor);
//# sourceMappingURL=Decorators.js.map