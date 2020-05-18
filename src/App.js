import React from 'react';
import { Switch, Route } from 'react-router';

import logo from './logo.svg';
import './App.css';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';


import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

const HatsPage = () => (<div><h1>Hats Page</h1></div>);

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async user => {
      //this.setState({ currentUser: user })
      //console.log(user);
      if (user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot(snapShot => {
          //console.log(snapShot.data());
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {console.log(this.state)});
        }
        );
      } else {
        this.setState({ currentUser: user });
      }
    });
  }

  unSubscribeFromAuth = null;

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div >
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/hats' component={HatsPage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;