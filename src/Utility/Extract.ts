type t1Extract = Extract<"a" | "a" | "b", "a">;
type t2Extract = Extract<"a" | "a" | "b", "a" | "B" | "c">;
type t3Extract = Extract<
  string | number | Function,
  () => void | Function | Function
>;
let a: t1Extract = "a";
console.log(typeof a);
