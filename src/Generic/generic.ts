// const promise = new Promise<string>((resolve) => {
//   setTimeout(() => {
//     resolve("settimeout3000");
//   }, 3000);
// });

// promise.then((data) => {
//   console.log(data.toUpperCase().trim());
// });

// const promise: Promise<string> = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("settimeout3000");
//   }, 3000);
// });

// promise.then((data) => {
//   console.log(data.toUpperCase().trim());
// });

function mergeObjects<T extends object, R extends object>(a: T, b: R): T & R {
  return Object.assign({}, a, b);
}
const merged1 = mergeObjects({ name: "myroslav" }, { surname: "shymon" });
const merged2 = mergeObjects({ model: "ford" }, { year: "2002" });
console.log(merged1, merged2);

// ==========================================

interface ILength {
  length: number;
}

function withCount<T extends ILength>(value: T): { value: T; count: string } {
  return {
    value,
    count: `In this object ${value.length}`,
  };
}

// console.log(withCount("fgfghjk"));
// console.log(withCount(["fgfghjk", "dgfdh", "asedghs"]));
// console.log(withCount(34)); //Error
// console.log(withCount({ length: 20 }));

// ==========================================

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
  return obj[key];
}

const person = {
  name: "Myroslav",
  age: 18,
  // job:"Frontend developer"
};
console.log(getObjectValue(person, "name"));
// console.log(getObjectValue(person, "job")); //Error

// ==========================================

class Collection<T extends number | string | boolean> {
  //   private _items: T[] = [];
  constructor(private _items: T[]) {}

  addItem(item: T) {
    this._items.push(item);
  }

  removeItem(someItem: T) {
    this._items = this._items.filter((item) => item !== someItem);
  }

  get items(): T[] {
    return this._items;
  }
}

const strings = new Collection<string>(["I", "Am", "Strings"]);
strings.addItem(".");
strings.removeItem("am");

const numbers = new Collection<number>([4, 6, 3, 72, 46]);
numbers.addItem(777);
numbers.removeItem(4);

// const objects = new Collection<object>([{ a: "4" }, { b: 5 }]);
// objects.addItem({ d: 5 });
// objects.removeItem({ a: "4" });

// ===================Partial=======================

interface CarGeneric {
  model: string;
  year: number;
}

function crateAndValidateCar(model: string, year: number): CarGeneric {
  const car: Partial<CarGeneric> = {};
  if (model.length > 3) {
    car.model = model;
  }
  if (year > 3) {
    car.year = year;
  }
  return car as CarGeneric;
}

// ===================Readonly=======================

const cars: Readonly<Array<string>> = ["ford", "audi"];
// cars.shift();

const ford: Readonly<CarGeneric> = {
  model: "ford",
  year: 2021,
};

// ford.model = "Shevrolet";
