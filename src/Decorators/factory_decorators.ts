// function factory(value: any) { //Factory
//   return function (target: any) { //Decorator
//     console.log(target); //Decorator logic
//   };
// }

const enumerable = (value: boolean) => {
  return (
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    descriptor.enumerable = value;
  };
};
class User {
  constructor(public name: string, public age: number) {}
  @enumerable(false)
  public getData(): string {
    return `${this.name}${this.age}`;
  }
}
export default User;
