import React, { Component } from 'react';
import { render } from 'react-dom';
import { withToastProvider } from './Toast';
import Child from './Child';
import './style.css';

function App() {
  return (
    <div>
      <Child />
      <p>
        Hello from App component.
      </p>
    </div>
  );
}

const AppWithToastProvider = withToastProvider(App);

render(<AppWithToastProvider />, document.getElementById('root'));
