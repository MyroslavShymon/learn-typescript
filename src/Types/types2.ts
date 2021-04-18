let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3]; //Generic
let list3: Array<Array<number>> = [
  [1, 4, 6],
  [2, 5, 7],
  [5, 3, 3, 4],
];
console.log("list1", list1, "\nlist2", list2, "\nlist3", list3);
//Tuple type

//Multiply lines
let x: [string, number];
x = ["hello", 10];

//One line
let y: [string, number] = ["razdvatri", 64];

let u: [any, any] = ["fsdgsdf", false];
let z: Array<any> = [10, undefined];

let xy: [string, number][] = [
  ["rtgrtb", 46345],
  ["dfg", 12314],
  ["gderer", 345],
];
console.log("[string, number][] :", xy);
let isComplited: any = true;

isComplited = false;
isComplited = 0;
isComplited = "false";
