import { useStore } from "../store";
import { SmallButton } from "./UI/SmallButton";
import { TodoItemWrapper } from "./UI/TodoItemWrapper";

interface TodoItemInteface {
  id: number;
  text: string;
  isDone: boolean;
}

export function TodoItem({ id, text, isDone }: TodoItemInteface) {
  const removeSingleTodo = useStore((state) => state.removeSingleTodo);
  const toggleSingleTodo = useStore((state) => state.toggleSingleTodo);

  return (
    <TodoItemWrapper text={text} isDone={isDone}>
      <SmallButton
        imageSrc={`${import.meta.env.BASE_URL}icons/check.svg`}
        alt="Mark task as done icon"
        onClick={() => toggleSingleTodo(id)}
      />
      <SmallButton
        imageSrc={`${import.meta.env.BASE_URL}icons/trash.svg`}
        alt="Remove task from list icon"
        onClick={() => removeSingleTodo(id)}
      />
    </TodoItemWrapper>
  );
}
