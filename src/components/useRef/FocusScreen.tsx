import { useRef } from 'react';
import '../01-useState/useEffect/effects.css';

export const FocusScreen = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClipck = () => {
    inputRef.current?.select();
  };
  return (
    <div>
      <h1>FocusScreen;</h1>
      <hr />
      <input className="form-control" placeholder="Su nombre" ref={inputRef} />
      <button className="btn btn-outline-primary mt-5" onClick={handleClipck}>
        Focus
      </button>
    </div>
  );
};
