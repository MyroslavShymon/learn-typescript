const namePerson: string = "Myroslav";
const sentence: string = `Hello ${namePerson}`;
console.log("Name: ", namePerson, " Sentence: ", sentence);

const isCompleted: boolean = false;
console.log("Boolean: ", isCompleted);

const decimal: number = 6;
const integer: number = 87.6;
const hex: number = 0xf00d;
const binary: number = 0b1010;
const octal: number = 0o744;

console.log("Numbers: ", decimal, integer, hex, binary, octal);

typeof null; //JS - object
typeof undefined; //Js - undefined
const undef: undefined = undefined;
const nul: null = null;

const helloUser = (): void => {
  console.log("Hello user!!!!!!!!!");
};
