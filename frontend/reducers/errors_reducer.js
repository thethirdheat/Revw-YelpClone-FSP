import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import businessFormErrors from './errors/business_form_errors'

export default combineReducers({
  session,
  businessForm: businessFormErrors
});
