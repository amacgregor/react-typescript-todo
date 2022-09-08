import { TodosList } from "./components/TodosList";
import { Title } from "./components/UI/Title";
import { NewTodoControls } from "./components/NewTodoControls";

export default function App() {
  return (
    <div className="mx-auto mt-16 mb-12 max-w-2xl p-6 sm:mt-24">
      <Title
        title="What do you have to do today?"
        subtitle="@pracapiech/react-typescript-todo"
      />
      <NewTodoControls />
      <TodosList />
    </div>
  );
}
