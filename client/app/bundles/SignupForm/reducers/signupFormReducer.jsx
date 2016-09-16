import Immutable from 'immutable';

import actionTypes from '../constants/signupFormConstants';

export const $$initialState = Immutable.fromJS({
  isValid: false,
  name: '', // this is the default state that would be used if one were not passed into the store
  email: '',
  password: '',
});

export default function signupFormReducer($$state = $$initialState, action) {

  switch (action.type) {
    case actionTypes.SIGNUP_FORM_UPDATE_ATTRIBUTE:
      const { name, value } = action;
      return $$state.set(name, value);

    case actionTypes.SIGNUP_FORM_UPDATE_VALID_STATUS:
      const { isValid } = action;
      return $$state.set('isValid', isValid);

    case actionTypes.SIGNUP_FORM_POST_SUBMIT:
      console.log('submit ended ' + action.result);
      return $$state;

    default:
      return $$state;
  }
}
