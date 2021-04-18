interface ITodo {
  title: string;
  description: string;
  completed: boolean;
}
type TodoPreiew = Pick<ITodo, "title" | "description">;

const todo: TodoPreiew = {
  title: "0",
  description: "1",
};
export { ITodo };
