import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Inventory from './Components/Inventory'
import Home from './Components/Home'

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/inventory' component={Inventory}/>
    </Switch>
);