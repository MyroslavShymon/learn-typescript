declare function f1(): {
  a: number;
  b: string;
};

type t1ReturnType = ReturnType<() => string>; //String
type t2ReturnType = ReturnType<(s: string) => void>; //Void
type t3ReturnType = ReturnType<<T>() => T>; //{}
type t4ReturnType = ReturnType<<T extends X, X extends number[]>() => T>; //number[]
type t5ReturnType = ReturnType<typeof f1>; //{  a: number; b: string;}
type t6ReturnType = ReturnType<any>; //any
type t7ReturnType = ReturnType<never>; //any
// type t8ReturnType = ReturnType<string>; //Error
// type t9ReturnType = ReturnType<Function>; //Error
