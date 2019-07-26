import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import PhonesList from './components/Phone/PhonesList';
import Nav from './components/misc/Navbar';
import PhoneDetails from './components/Phone/PhoneDetails'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
      
       <Switch>
        < Route exact path='/' component={PhonesList} />
        < Route exact path='/:id' component={PhoneDetails} />
      </Switch>
      
      </div>
    );
  }
}

export default App;