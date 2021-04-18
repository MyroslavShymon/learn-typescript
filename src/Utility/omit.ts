interface ITodo {
  title: string;
  description: string;
  completed: boolean;
}
type TodoPreiew = Omit<ITodo, "title" | "description">;

const todo: TodoPreiew = {
  completed: true,
};
export { ITodo };
