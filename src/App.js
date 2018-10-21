import React, { Component } from 'react';
import axios from 'axios';
import socket from './socket';
import { CSSTransitionGroup } from 'react-transition-group';
import Queue from './Queue';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queue: [],
      client: socket(),
    };
    this.addUser = this.addUser.bind(this);
    this.updateQueue = this.updateQueue.bind(this);
  }

  componentDidMount() {
    this.state.client.addToQueue(this.addUser);
    this.state.client.updateQueue(this.updateQueue);
    this.getQueue();
  }

  addUser() {
    this.getQueue();
  }

  updateQueue() {
    axios.get('http://local.tauntaun.net:5000/queue/')
      .then(response => this.setState(
        { queue: response.data }));
  }

  getQueue() {
    if (this.state.queue.length < 5 ) {
      axios.get('http://local.tauntaun.net:5000/queue/')
        .then(response => this.setState(
          { queue: response.data }));
    }
  }

  render() {
    const challengers = this.state.queue.map(c => {
      return(
        <li key={c._id} className="challenger">
          <Queue challenger={c}/>
        </li>
      );
    });

    return (
      <div className="App">
        <ul>
          <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={1500}
          transitionLeaveTimeout={1000}>
          { challengers }
          </CSSTransitionGroup>
        </ul>
      </div>
    );
  }
}

export default App;
