import { FormEvent, useEffect, useState } from 'react';

import { Message } from './Message';
import { userForm } from '../../../hooks/userForm';

export interface FormData {
  name: string;
  email: string;
  password: string;
}

export const FormWithCustomHooks = () => {
  const { values, handleInputChange } = userForm<FormData>({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {}, [values.email]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  /* const [formValues, handleInputChange] = userForm({
    name: '',
    email: '',
    password: '',
  }); */

  return (
    <form onSubmit={handleSubmit}>
      <h1>FormWithCustomHooks</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={values.name}
          onChange={handleInputChange}
        />
      </div>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="email@email.com"
          autoComplete="off"
          value={values.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="******"
          value={values.password}
          onChange={handleInputChange}
        />
      </div>
      {values.name === '123' && <Message />}
      <button type="submit" className="btn btn-primary">
        Guardar
      </button>
    </form>
  );
};
