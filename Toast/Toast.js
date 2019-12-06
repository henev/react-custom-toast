import React, { useEffect, useRef } from 'react';

function Toast({ children, remove, type }) {
  const removeRef = useRef(remove);
  removeRef.current = remove;

  useEffect(() => {
    const duration = 5000;
    const id = setTimeout(() => removeRef.current(), duration);

    return () => clearTimeout(id);
  }, []);

  return (
    <div className="toast">
      <div className="toast__text">
        { children }
      </div>
      <div>
        <button onClick={remove} className="toast__close-btn">x</button>
      </div>
    </div>
  );
}

export default Toast;