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
let myFunc;
function oldFunc(name) {
    console.log(`Your name is ${name}`);
}
myFunc = oldFunc;
//# sourceMappingURL=functions.js.map