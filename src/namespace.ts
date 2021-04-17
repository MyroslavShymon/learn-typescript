namespace Utils {
  export const Secret: string = "dsdgr";
  export const PI: number = 3.1415;

  export const getPass = (name: string, age: number): string => `${name}${age}`;

  export const isEmpty = <T>(data: T): boolean => !data;
}

const myPass = Utils.getPass("Yaroslav", 23);
const isSecret = Utils.isEmpty(Utils.Secret);

const Pi = 3;
