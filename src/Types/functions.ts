const cratePassword1 = (
  name: string = "name",
  age: number | string = 0
): string => `${name} ${age}`;

cratePassword1("Jack", 45);
cratePassword1("Jack", "45");
let cratePassword1String: string = cratePassword1();
console.log("cratePassword()", cratePassword1String);

const cratePassword2 = (name: string, age?: number | string): string =>
  `${name} ${age}`;

cratePassword2("Jack", 45);
cratePassword2("Jack", "45");
let cratePassword2String: string = cratePassword2("Igor");
console.log("cratePassword()", cratePassword2String);

const createSkills = (name: string, ...skills: Array<string>): string =>
  `${name} and skills are: ${skills}`;
let createSkillsVariable: string = createSkills(
  "Stepan",
  "React",
  "Vue",
  "Angular"
);
console.log("createSkillsVariable", createSkillsVariable);

//Copy functions
let myFunc: (firstArg: string) => void;

function oldFunc(name: string): void {
  console.log(`Your name is ${name}`);
}

myFunc = oldFunc;
