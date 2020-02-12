import React from 'react';
import PropTypes from 'prop-types';
import style from './Counter.module.css';

const Counter = ({ counter, onDecrement, onIncrement }) => {
  return (
    <div className={style.counter}>
      <button type="button" className={style.btn} onClick={onDecrement}>
        -
      </button>
      <span className={style.span}>{counter}</span>
      <button type="button" className={style.btn} onClick={onIncrement}>
        +
      </button>
    </div>
  );
};

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
};

export default Counter;
