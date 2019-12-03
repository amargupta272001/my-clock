import React, { Component } from 'react';
import Clock from './Clock';

class App extends Component {
  render() {
    return (
      <div style={{ margin: '40px',
      border: '5px solid pink'}}>
        <Clock />
      </div>
    );
  }
}
export default App;



