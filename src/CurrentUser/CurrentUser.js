import React, { PropTypes } from 'react';
import { auth } from '../firebase';
import './styles.css';

const CurrentUser = ({ user }) => (
  <div className='current-user'>
    <img 
      src={ user.photoURL }
      className='current-user-img'
      alt={ user.displayName } /> 
    <div className='current-user-id'>
      <h3>{user.displayName}</h3>
      <p>{user.email}</p>
      <button onClick={ () => auth.signOut() }>
        Sign Out
      </button>
    </div>
  </div>
);

CurrentUser.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string.isRequired,
    photoURL: PropTypes.string,
    uid: PropTypes.string.isRequired
  })
};

export default CurrentUser;