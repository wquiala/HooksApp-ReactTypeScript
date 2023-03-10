import { Todo } from './TodoApp';
interface Props {
  todo: Todo;
  handleToggle: Function;
  handleDelete: Function;
  i: number;
}

export const TodoLIstItem = ({
  todo,
  handleToggle,
  handleDelete,
  i,
}: Props) => {
  return (
    <>
      <li key={todo.id} className="list-group-item">
        <p
          className={`${todo.done && 'complete'}`}
          onClick={() => handleToggle(todo.id)}
        >
          {i + 1}. {todo.desc}
        </p>
        <button
          className="btn btn-danger"
          onClick={() => handleDelete(todo.id)}
        >
          Borrar
        </button>
      </li>
    </>
  );
};
