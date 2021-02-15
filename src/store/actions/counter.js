import * as actionTypes from './actionTypes';

export const increment = () => {
  return {
    type: actionTypes.INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT,
  };
};

export const add = (value) => {
  return {
    type: actionTypes.ADDITION,
    value: value,
  };
};

export const subtraction = (value) => {
  return {
    type: actionTypes.SUBTRACTION,
    value: value,
  };
};
