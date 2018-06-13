import React, { Component } from 'react';
import { auth, database } from '../firebase';
import CurrentUser from '../CurrentUser/CurrentUser';
import SignIn from '../SignIn';
import NewRestaurant from '../Restaurants/NewRestaurant';
import Restaurants from '../Restaurants/Restaurants';
import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      restaurants: null,
    }
    this.restaurantRef = database.ref('/restaurants');
  }

  componentDidMount() {
    auth.onAuthStateChanged(currentUser => {
      this.setState({ currentUser });
      this.restaurantRef.on('value', (snapshot) => {
        this.setState({ restaurants: snapshot.val() })
      })
    })
  }

  render() {
    const { currentUser, restaurants } = this.state;
    return (
      <div className='app'>
        <header className="Application--header">
          <h1>Lunch Rush</h1>
        </header>
        <div>
          { !currentUser && <SignIn /> }
          { currentUser && 
            <div>
              <NewRestaurant />
              <Restaurants restaurants={restaurants} user={currentUser} />
              <CurrentUser user={currentUser} />
            </div>
          }
        </div>
      </div>
    );
  }
}

export default App;
