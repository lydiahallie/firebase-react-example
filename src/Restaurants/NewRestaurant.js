import React, { Component, PropTypes } from 'react';
import { database } from '../firebase';
import './styles.css';

class NewRestaurant extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };

    this.restaurantsRef = database.ref('/restaurants')
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name } = this.state;
    this.restaurantsRef.push({ name });
  }

  render() {
    const { name } = this.state;
    return (
      <form className='new-restaurant'>
        <input
          type='text'
          value={ name }
          placeholder='Name of restaurant'
          onChange={(event) => this.setState({ name: event.target.value })} />
        <button
          onClick={this.handleSubmit}
          disabled={!name}>
          Submit
        </button>
      </form>
    );
  }
}

NewRestaurant.propTypes = {
  restaurantsRef: PropTypes.object
};

export default NewRestaurant;
