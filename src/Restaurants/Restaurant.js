import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';
import './styles.css';

const Restaurant = () => {
  const { name, votes, handleSelect, handleDeselect } = this.props;
  return (
    <article className='restaurant'>
      <h3>{name}</h3>
      <ul>{ votes && map(votes, (vote, key) => <li key={key}>{vote}</li>)}</ul>
      <button onClick={ handleSelect }>Yea, I'd go there</button>
      <button className='destructive' onClick={ handleDeselect }>Nah, nevermind</button>
    </article>
  );
}

Restaurant.propTypes = {
  name: PropTypes.string,
  votes: PropTypes.object,
  user: PropTypes.object,
  handleSelect: PropTypes.func,
  handleDeselect: PropTypes.func
};

export default Restaurant;
