import React, { Component } from 'react';
import BooleanComponent from './03/BooleanComponent';

class App extends Component {
  render() {
    const name = 'hyojin';
    return (
      <div>
        <div>
          지루함 : <BooleanComponent bored />
        </div>
        <div>
          안지루함 : <BooleanComponent />
        </div>
      </div>
    );
  }
}

export default App;
