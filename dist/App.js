var Directions1;
(function (Directions1) {
    Directions1[Directions1["Up"] = 0] = "Up";
    Directions1[Directions1["Down"] = 1] = "Down";
    Directions1[Directions1["Left"] = 2] = "Left";
    Directions1[Directions1["Right"] = 3] = "Right";
})(Directions1 || (Directions1 = {}));
var Directions2;
(function (Directions2) {
    Directions2[Directions2["Up"] = 2] = "Up";
    Directions2[Directions2["Down"] = 4] = "Down";
    Directions2[Directions2["Left"] = 6] = "Left";
    Directions2[Directions2["Right"] = 7] = "Right";
})(Directions2 || (Directions2 = {}));
console.log("Directions1", Directions1.Up, Directions1.Down, Directions1.Left, Directions1.Right, "Directions2", Directions2.Up, Directions2.Down, Directions2.Left, Directions2.Right);
var links;
(function (links) {
    links["youtube"] = "https://www.youtube.com/";
    links["telegram"] = "https://www.telegram.com/";
    links["instagram"] = "https://www.instagram.com/";
})(links || (links = {}));
console.log("links:", links);
console.log("links:", "https://www.youtube.com/");
const cratePassword1 = (name = "name", age = 0) => `${name} ${age}`;
cratePassword1("Jack", 45);
cratePassword1("Jack", "45");
let cratePassword1String = cratePassword1();
console.log("cratePassword()", cratePassword1String);
const cratePassword2 = (name, age) => `${name} ${age}`;
cratePassword2("Jack", 45);
cratePassword2("Jack", "45");
let cratePassword2String = cratePassword2("Igor");
console.log("cratePassword()", cratePassword2String);
const createSkills = (name, ...skills) => `${name} and skills are: ${skills}`;
let createSkillsVariable = createSkills("Stepan", "React", "Vue", "Angular");
console.log("createSkillsVariable", createSkillsVariable);
const create = (o) => {
    console.log("Object", o);
};
create({ obj: 1 });
{
    let id;
    id = 10;
    id = "sdfdfr";
}
{
    let id;
    id = "dsfge";
    console.log("type id", id);
}
let names = [
    ["John", "Smith", 83],
    ["Kate", "Hammet", 24],
];
console.log(names);
const namePerson = "Myroslav";
const sentence = `Hello ${namePerson}`;
console.log("Name: ", namePerson, " Sentence: ", sentence);
const isCompleted = false;
console.log("Boolean: ", isCompleted);
const decimal = 6;
const integer = 87.6;
const hex = 0xf00d;
const binary = 0b1010;
const octal = 0o744;
console.log("Numbers: ", decimal, integer, hex, binary, octal);
typeof null;
typeof undefined;
const undef = undefined;
const nul = null;
const helloUser = () => {
    console.log("Hello user!!!!!!!!!");
};
let list1 = [1, 2, 3];
let list2 = [1, 2, 3];
let list3 = [
    [1, 4, 6],
    [2, 5, 7],
    [5, 3, 3, 4],
];
console.log("list1", list1, "\nlist2", list2, "\nlist3", list3);
let x;
x = ["hello", 10];
let y = ["razdvatri", 64];
let u = ["fsdgsdf", false];
let z = [10, undefined];
let xy = [
    ["rtgrtb", 46345],
    ["dfg", 12314],
    ["gderer", 345],
];
console.log("[string, number][] :", xy);
let isComplited = true;
isComplited = false;
isComplited = 0;
isComplited = "false";
//# sourceMappingURL=App.js.map