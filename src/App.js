import React, { Component } from 'react';
import './App.css';
import Sidenav from './Sidenav/Sidenav';
import Favoritos from './Favoritos/Favoritos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidenav />
        <Favoritos />
      </div>
    );
  }
}

export default App;