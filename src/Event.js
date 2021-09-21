import React, { Component } from "react";

class Event extends Component {
  render() {
    return <div>
        <h2 className = "title">
            example event
        </h2>
        <div className = "time">date and time</div>
        <div className = "location">locations</div>
        <button className = "details">view details</button>
    </div>;
  }
}
export default Event;