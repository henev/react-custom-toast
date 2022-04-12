import React from 'react';
import { useToast } from './Toast';

export const Child = () => {
  const toast = useToast();
  const showToast = () =>
    toast.add(`Toast created from child component! ${Math.random() * 2332}`);

  return (
    <>
      <h3>Hello from child component!</h3>
      <button onClick={showToast}>Show me a toast</button>
    </>
  );
};
