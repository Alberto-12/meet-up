import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        numOfEvents: 32 ,
    }
    setNumberOfEvents = (e) => {
        this.setState({ 
            numOfEvents: e.target.value
          });
        }
  render() {
    return (
      <div className = "NumberOfEvents">
          <input
          type = "number"
          className = "numberEvents"
          value = {this.state.numOfEvents} 
          onChange = {this.setNumberOfEvents}
          />
      </div>
    );
  }
}

export default NumberOfEvents;