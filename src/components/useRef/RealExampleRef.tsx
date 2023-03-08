import { useState, useRef, useEffect } from 'react';
import '../01-useState/useEffect/effects.css';
import { MultiplesCustomHoks } from '../examples/MultiplesCustomHoks';
export const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>RealExampleRef</h1>
      <hr />
      {show && <MultiplesCustomHoks />}
      <button
        className="btn btn-primary mt-5"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide
      </button>
    </div>
  );
};
