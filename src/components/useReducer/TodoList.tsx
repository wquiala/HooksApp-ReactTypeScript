import { Todo } from './TodoApp';
import { TodoLIstItem } from './TodoLIstItem';
interface Prop {
  todo: Todo[];
  handleToggle: Function;
  handleDelete: Function;
}

export const TodoList = ({ todo, handleToggle, handleDelete }: Prop) => {
  return (
    <>
      <ul className="list-group list-group-flush">
        {todo.map((todo, i) => {
          return (
            /* TodoLIstItem */
            <TodoLIstItem
              key={todo.id}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
              todo={todo}
              i={i}
            />
          );
        })}
      </ul>
    </>
  );
};
