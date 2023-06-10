import React from 'react';
import HomePage from '../pages/HomePage';
import HousePage from '../pages/HousePage';
import { Router, Switch, Route } from 'react-router-dom';
const App = () =>{
  return(
    <>
    <Router>
      <Switch>
        <Route path = "/">
          <HomePage/>
        </Route>
        <Route path="/housepage">
          <HousePage/>
        </Route>
      </Switch>
    </Router>
    </>
  );
};

export default App;