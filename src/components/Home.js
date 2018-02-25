import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './App.css';

export default class Home extends Component {//Change this to be a funcional component that uses props
    render() {
        return (
            <div>
                <h1>This is the home Page!</h1>
                <h3>One day there will be a login here.
                     </h3>
                <Link to='/'></Link>
            </div>
        )
    }
}