import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_SESSION,
  RECEIVE_ERRORS_CLEAR
} from '../actions/session_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_SESSION:
      return [];
    case RECEIVE_ERRORS_CLEAR:
      return [];
    default:
      return state;
  }
};
