import './App.css';
import React from 'react';
import { Switch, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import BeersListPage from './pages/BeersListPage';
import BeerDetailsPage from './pages/BeerDetailsPage';
import RandomBeerDetailsPage from './pages/RandomBeerDetailsPage';
import AddBeerPage from './pages/AddBeerPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/beers" component={BeersListPage} />
        <Route exact path="/beers/:id" component={BeerDetailsPage}/>
        <Route exact path="/random-beer" component={RandomBeerDetailsPage}/>
        <Route exact path="/new-beer" component={AddBeerPage}/>
      </Switch>
    </div>
  );
}

export default App;
