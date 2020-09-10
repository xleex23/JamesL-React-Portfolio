import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav';
import LandingPage from '../../routes/LandingPage/LandingPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <main className="middle">
          <Switch>
            <Route exact path={'/'} component={LandingPage} />
          </Switch>
        </main>
      </>
    )
  }
}

export default App;
