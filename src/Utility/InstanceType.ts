class C {
  constructor(public x: number, public y: number) {}
}

type t1InstanceType = InstanceType<typeof C>; //C
type t2InstanceType = InstanceType<any>; //any
type t3InstanceType = InstanceType<never>; //any
// type t4InstanceType = InstanceType<string> //Error
// type t5InstanceType = InstanceType<Function> //Error
let c: t1InstanceType = new C(4, 5);
