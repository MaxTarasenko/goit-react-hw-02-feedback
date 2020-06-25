import React from 'react';
import PropTypes from 'prop-types';
import style from './feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={style.listButtons}>
    <li>
      <button onClick={() => onLeaveFeedback(options[0])}>Good</button>
    </li>
    <li>
      <button onClick={() => onLeaveFeedback(options[1])}>Neutral</button>
    </li>
    <li>
      <button onClick={() => onLeaveFeedback(options[2])}>Bad</button>
    </li>
  </ul>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
};

export default FeedbackOptions;
