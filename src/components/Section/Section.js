import PropTypes from 'prop-types';
import React, { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';
import Statistics from '../Statistics/Statistics';

export default class Section extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 100,
  };

  handleIncrement = value => {
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () =>
    this.setState(prevState => ({
      total: prevState.good + prevState.neutral + prevState.bad,
    }));

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      positivePercentage: Math.floor(
        (100 / (prevState.good + prevState.neutral + prevState.bad)) *
          prevState.good,
      ),
    }));
  };

  render() {
    const { title } = this.props;
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;
    const { total } = this.state;
    const { positivePercentage } = this.state;

    return (
      <>
        <div>
          <h1>{title}</h1>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleIncrement}
          />
        </div>
        <div>
          <h1>Statistics</h1>
        </div>
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </>
    );
  }
}
