{
  type Name = string;
  let id: Name;
  id = "dsfge";
  console.log("type id", id);
}

type twoDimensionalArray = Array<Array<number | string>>;

let names: twoDimensionalArray = [
  ["John", "Smith", 83],
  ["Kate", "Hammet", 24],
];
console.log(names);
