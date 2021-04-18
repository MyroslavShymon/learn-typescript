"use strict";
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged1 = mergeObjects({ name: "myroslav" }, { surname: "shymon" });
const merged2 = mergeObjects({ model: "ford" }, { year: "2002" });
console.log(merged1, merged2);
function withCount(value) {
    return {
        value,
        count: `In this object ${value.length}`,
    };
}
function getObjectValue(obj, key) {
    return obj[key];
}
const person = {
    name: "Myroslav",
    age: 18,
};
console.log(getObjectValue(person, "name"));
class Collection {
    constructor(_items) {
        this._items = _items;
    }
    addItem(item) {
        this._items.push(item);
    }
    removeItem(someItem) {
        this._items = this._items.filter((item) => item !== someItem);
    }
    get items() {
        return this._items;
    }
}
const strings = new Collection(["I", "Am", "Strings"]);
strings.addItem(".");
strings.removeItem("am");
const numbers = new Collection([4, 6, 3, 72, 46]);
numbers.addItem(777);
numbers.removeItem(4);
function crateAndValidateCar(model, year) {
    const car = {};
    if (model.length > 3) {
        car.model = model;
    }
    if (year > 3) {
        car.year = year;
    }
    return car;
}
const cars = ["ford", "audi"];
const ford = {
    model: "ford",
    year: 2021,
};
//# sourceMappingURL=generic.js.map