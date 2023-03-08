import { Todo, initialState } from './TodoApp';

export type Action = {
  type: string;
  payload: Todo;
};

export const todoReducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];

    case 'delete':
      return state.filter((todo) => todo.id !== action.payload.id);

    case 'toggle':
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo,
      );
    /* Esta es una forma mas larga
       return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            done: !todo.done,
          };
        } else {
          return todo;
        }
      }); */
    default:
      return state;
  }
};
