interface IProps {
  a?: number;
  b?: string;
}

const obj1: IProps = { a: 5 };
const obj2: Required<IProps> = { a: 5, b: "5" };
// const obj3: Required<IProps> = { a: 5};//error because we havent parametr B
