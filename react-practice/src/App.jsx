import React, { Component } from 'react';
import BooleanComponent from './03/BooleanComponent';
import RequiredComponet from './03/RequiredComponet';
import StateExample from './03/StateExample';
import LifecycleExample from './03/LifecycleExample';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { hasDestroyed: false };
  }
  componentDidMount() {
    this.setState({ hasDestroyed: true });
  }
  render() {
    return (
      <div>
        {this.state.hasDestroyed? null : <LifecycleExample />}
      </div>
    );
  }
}

export default App;
