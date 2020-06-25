import PropTypes from 'prop-types';
import React from 'react';

const Notification = ({ message }) => (
  <div>
    <p>{message}</p>
  </div>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
