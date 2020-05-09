import React from 'react';
import { Switch, Route } from 'react-router';

import logo from './logo.svg';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
const HatsPage = () => (<div><h1>Hats Page</h1></div>);

function App() {
  return (
    <div >
      {/* <HomePage></HomePage> */}
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
        <Route exact path="/shop" component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;