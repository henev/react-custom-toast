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
    <div className={styles[`${type}Toast`]}>
      <div className={styles.text}>
        <strong className={styles[type]}>{type === 'error' ? '[Error] ' : '[Success] '}</strong>
        { children }
      </div>
      <div>
        <button onClick={remove} className={styles.closeButton}>x</button>
      </div>
    </div>
  );
}

export default Toast;