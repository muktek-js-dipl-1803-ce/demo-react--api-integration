import React, { Component } from 'react';
import User from './components/User.js'


class App extends Component {
  render() {
    return (
      <div className="App" >
        <h2>
          Users List<br/>
          <small>Consuming + Rendering API Data</small>
        </h2>
        <hr/>
        <div className="flex-container">
          <User  />
          <User  />
          <User  />
          <User  />
          </div>
      </div>
    );
  }
}

export default App;
