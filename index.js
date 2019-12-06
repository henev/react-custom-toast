import React, { Component } from 'react';
import { render } from 'react-dom';
import Child from './Child';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Child />
        <p>
          Hello from App component.
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
