interface IUser {
  name: string;
}
const userReadomly: Readonly<IUser> = {
  name: "Yauhen",
};

// userReadomly.name = "Roma"; // read only!!!!
