import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import Routes from './routes'
import {Link} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
       
        
        <Link to='/dash'>Enter!</Link>
        
        {Routes}
      </div>
    );
  }
}

export default App;
