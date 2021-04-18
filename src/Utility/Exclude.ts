type t1Exclude = Exclude<"a" | "a" | "b", "a">;
type t2Exclude = Exclude<"a" | "a" | "b", "a" | "B" | "c">;
type t3Exclude = Exclude<
  string | number | Function,
  () => void | Function | Function
>;
