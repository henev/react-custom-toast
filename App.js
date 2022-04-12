import React, { useState } from 'react';
import { Child } from './Child';
import './style.css';

export const App = () => {
  return (
    <div style={{ border: '1px solid red', padding: '8px' }}>
      <h1>Hello from App component.</h1>
      <Child />
    </div>
  );
};
