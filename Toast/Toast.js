import React, { useEffect } from 'react';

export const Toast = ({ children, remove }) => {
  useEffect(() => {
    console.log('key');
    const duration = 3000;
    const id = setTimeout(remove, duration);

    return () => clearTimeout(id);
  }, []);

  return (
    <div className="toast">
      <div className="toast__text">{children}</div>
      <div>
        <button onClick={remove} className="toast__close-btn">
          x
        </button>
      </div>
    </div>
  );
};
