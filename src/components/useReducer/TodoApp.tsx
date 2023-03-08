import React, { useReducer } from 'react';
import './styles.css';
import { todoReducer, Action } from './todoReducer';
import { FormEvent, useEffect } from 'react';
import { userForm } from '../../hooks/userForm';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

export interface Todo {
  id: number;
  desc?: string;
  done?: boolean;
}
export const initialState: Todo[] = [
  {
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false,
  },
];

const init = () => {
  const value = localStorage.getItem('todos');
  return value ? JSON.parse(value) : [];
};

export const TodoApp = () => {
  const [todo, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todo));
  }, [todo]);

  const handleDelete = (todoId: number) => {
    const actioD = {
      type: 'delete',
      payload: { id: todoId },
    };

    dispatch(actioD);
  };

  const handleToggle = (todoId: number) => {
    dispatch({
      type: 'toggle',
      payload: { id: todoId },
    });
  };

  const handleAddTodo = (newTodo: Todo) => {
    const accion = {
      type: 'add',
      payload: newTodo,
    };
    dispatch(accion);
  };

  return (
    <div>
      <h1>TodoApp {todo.length}</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          {/* TodoList */}
          <TodoList
            todo={todo}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        </div>
        <div className="col-5">
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};
