import React, { Component, PropTypes } from 'react';
import Restaurant from './Restaurant';
import map from 'lodash/map';
import { database } from '../firebase';
import './styles.css';

class Restaurants extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleDeselect = this.handleDeselect.bind(this);
  }

  handleSelection(key, select) { 
    const currentUser = this.props.user;
    const db = database.ref('/restaurants').child(key).child('votes').child(currentUser.uid);
    select ? db.set(currentUser.displayName) : db.remove();
  }

  render () {
    const { restaurants } = this.props;
    return (
      <section className='restaurants'>
        { map(restaurants, (restaurant, key) => 
            <Restaurant 
              handleSelect={ () => this.handleSelection(key, true) }
              handleDeselect={ () => this.handleSelection(key, false) }
              key={key} 
              {...restaurant} />
        )} 
      </section>
    );
  }
}

Restaurants.propTypes = {
  user: PropTypes,
  restaurantsRef: PropTypes.object,
  restaurants: PropTypes.object
};

export default Restaurants;
