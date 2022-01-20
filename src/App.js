import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations  } from './api';
import './nprogress.css';


class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 12,
    recentLocation: "all",
    
  }

  updateEvents = (location, numberOfEvents) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ? events: events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice( 0, this.state.numberOfEvents ),
        recentLocation: location,
      });

    });
  }

  updateNumberOfEvents = (value) => {
    this.setState({
      numberOfEvents: value
    })
    this.updateEvents(this.state.recentLocation,  this.state.numberOfEvents)
      
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        const slicedEvents = events.slice(0, this.state.numberOfEvents);
          this.setState({ events: slicedEvents, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }


  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateNumberOfEvents = {this.updateNumberOfEvents} />
        <EventList events={this.state.events} />
      </div>

    );
  }
}


export default App;