"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const addString = (constructor) => {
    console.log(constructor);
};
const logMethod = (target, propertyKey, descriptor) => {
    console.log("logMethod propertyKey", propertyKey);
};
const logGet = (target, propertyKey, descriptor) => {
    console.log("logGet propertyKey", propertyKey);
};
const decoratorOfField = (target, propertyKey) => {
    console.log("Target ", target, " Property key ", propertyKey);
};
let Programmer = class Programmer {
    constructor(name, surname, lang) {
        this.surname = surname;
        this.lang = lang;
        this._name = name;
    }
    getProgrammer() {
        return `${this._name} ${this.surname} ${this.lang}`;
    }
    get name() {
        return this._name;
    }
};
__decorate([
    decoratorOfField
], Programmer.prototype, "_name", void 0);
__decorate([
    logMethod
], Programmer.prototype, "getProgrammer", null);
__decorate([
    logGet
], Programmer.prototype, "name", null);
Programmer = __decorate([
    addString
], Programmer);
const egor = new Programmer("Egor", "Zaleskiy", "php");
console.log(egor);
console.log(egor.getProgrammer());
//# sourceMappingURL=simple_decorators.js.map