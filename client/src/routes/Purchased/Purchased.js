import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Purchased = props => {
  const isLoggedIn = props.isLoggedIn;
  if(!isLoggedIn) {
    return (
        <Navigate to="/" replace />
      )
  }

  return props.children;
}

Purchased.propTypes = {
    isLoggedIn: PropTypes.bool
}

export default Purchased