import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
import { FormWithCustomHooks } from './components/01-useState/useEffect/FormWithCustomHooks';
import { SimpleForm } from './components/01-useState/useEffect/SimpleForm';
import { MultiplesCustomHoks } from './components/examples/MultiplesCustomHoks';
import { FocusScreen } from './components/useRef/FocusScreen';
import { RealExampleRef } from './components/useRef/RealExampleRef';
import { TodoApp } from './components/useReducer/TodoApp';

export const HookApp = () => {
  return (
    <>
      {/* <hr />
      <CounterWithCustomHook />
      <hr />
      <SimpleForm />
      <hr />
      <FormWithCustomHooks />
      <hr /> */}
      <TodoApp />
    </>
  );
};
