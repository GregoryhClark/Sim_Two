import React from 'react';
import {Route, Switch} from 'react-router-dom';
//Import all Components here
import Home from './components/Home.js'
import Dash from './components/Dash.js'
import Entry from './components/Entry.js'

export default (
    <Switch>
        <Route component = {Home} exact path = '/'/>
        {/* <Route component = {Dashboard}  path = '/dash'/> */}
        <Route component = {Dash} path = '/dash'/>
        <Route component = {Entry} path = '/enterValue' />
        
    </Switch>
)