import create from "zustand";

export interface TodoInterface {
  id: number;
  text: string;
  isDone: boolean;
}

export interface StoreInterface {
  todos: TodoInterface[];
  inputValue: string;
  addNewTodo: () => void;
  setInputValue: (text: string) => void;
  toggleSingleTodo: (id: number) => void;
  removeSingleTodo: (id: number) => void;
}

const defaultTodos: TodoInterface[] = [
  { id: 1, text: "Wash the dishes", isDone: false },
  { id: 2, text: "Take the dog for a walk", isDone: false },
  { id: 3, text: "Hang laundry", isDone: true },
];

function addNewTodo(todos: TodoInterface[], text: string): TodoInterface[] {
  if (text.trim() !== "")
    return [
      ...todos,
      {
        id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
        text,
        isDone: false,
      },
    ];
  return todos;
}

function toggleSingleTodo(todos: TodoInterface[], id: number): TodoInterface[] {
  return todos.map((todo) => ({
    ...todo,
    isDone: todo.id === id ? !todo.isDone : todo.isDone,
  }));
}

function removeSingleTodo(todos: TodoInterface[], id: number): TodoInterface[] {
  return todos.filter((todo) => todo.id !== id);
}

export const useStore = create<StoreInterface>((set) => {
  return {
    todos: defaultTodos,
    inputValue: "",
    addNewTodo() {
      set((state: StoreInterface) => ({
        ...state,
        inputValue: "",
        todos: addNewTodo(state.todos, state.inputValue),
      }));
    },
    setInputValue(text) {
      set((state: StoreInterface) => ({
        ...state,
        inputValue: text,
      }));
    },
    toggleSingleTodo(id: number) {
      set((state: StoreInterface) => ({
        ...state,
        todos: toggleSingleTodo(state.todos, id),
      }));
    },
    removeSingleTodo(id: number) {
      set((state: StoreInterface) => ({
        ...state,
        todos: removeSingleTodo(state.todos, id),
      }));
    },
  };
});
