import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        numOfEvents: 32 ,
    }
    setNumberOfEvents = (e) => {
        this.setState({ 
            numOfEvents: e.target.value
          });
          this.props.updateNumberOfEvents(e.target.value)
        }
  render() {
    return (
      <div className = "NumberOfEvents">
        <label>Number of events: </label>
          <input
          type = "number"
          className = "numberEvents"
          value = {this.props.numberOfEvents} 
          onChange = {this.setNumberOfEvents}
          />
      </div>
    );
  }
}

export default NumberOfEvents;