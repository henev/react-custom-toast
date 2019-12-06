import React from 'react';

function Child() {
  const showToast = () => {};
  
  return (
    <>
      <h3>Hello from child component!</h3>
      <button onClick={showToast}>Show me toast</button>
    </>
  );
}

export default Child;
