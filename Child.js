import React from 'react';
import { useToast } from './Toast';

export const Child = () => {
  const toast = useToast();
  const showToast = () =>
    toast.open(`Toast created from child component! ${Math.random() * 2332}`);

  return (
    <div style={{ border: '1px solid blue', padding: '8px' }}>
      <h3>Hello from child component!</h3>
      <button onClick={showToast}>Show me a toast</button>
    </div>
  );
};
