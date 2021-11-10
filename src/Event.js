import React, { Component } from "react";

class Event extends Component {
  render() {
    return <div>
        <h2 className = "title">
            {this.props.event.summary}
        </h2>
  <div className = "time">{this.props.event.start.dateTime}</div>
        <div className = "location">{this.props.event.location}</div>
        <button className = "details">view details</button>
    </div>;
  }
}
export default Event;