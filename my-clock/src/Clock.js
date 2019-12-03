import React, { Component } from 'react';
import AnalogClock from 'analog-clock-react';

class Clock extends Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    setInterval(
      () => this.setState({ date: new Date() }),
      1000
    );
  }
  
  render() {
    let options = {
      width: "300px",
      border: true,
      borderColor: "#696969",
      baseColor: "#000000",
      centerColor: "#459cff",
      handColors: {
        second: "#8B0000",
        minute: "#fff",
        hour: "#fff"
      }
    };
    return (
        <>
        <h1 style={{marginLeft: '530px', marginBottom: '100px'}}>Current Time</h1>
        <div style={{marginLeft: '500px', marginBottom: '100px'}}>
         <AnalogClock {...options} />
        </div>
      </>
    );
  }
}
export default Clock;



