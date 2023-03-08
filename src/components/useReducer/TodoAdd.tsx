import { FormEvent } from 'react';
import { userForm } from '../../hooks/userForm';
interface Prop {
  handleAddTodo: Function;
}

export const TodoAdd = ({ handleAddTodo }: Prop) => {
  const { values, handleInputChange, reset } = userForm({
    description: '',
  });

  const handleSumit = (e: FormEvent) => {
    e.preventDefault();

    if (values.description.trim().length <= 1) {
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      desc: values.description,
      done: false,
    };

    handleAddTodo(newTodo);
    reset();
  };

  return (
    <>
      <h1>Agregar Todo</h1>
      <form onSubmit={handleSumit}>
        <input
          type="text"
          name="description"
          className="form-control"
          placeholder="Aprender..."
          autoComplete="off"
          value={values.description}
          onChange={handleInputChange}
        />
        <div className="d-grid gap-2">
          <button
            type="submit"
            className="btn btn-outline-primary mt-2 btn-block"
          >
            Agregar
          </button>
        </div>
      </form>
    </>
  );
};
