import Immutable from 'immutable';

import actionTypes from '../constants/signupFormConstants';

export const $$initialState = Immutable.fromJS({
  open: false, // this is the default state that would be used if one were not passed into the store
  title: '',
  message: '',
});

export default function messageDialogReducer($$state = $$initialState, action) {

  switch (action.type) {
    case actionTypes.MESSAGE_DIALOG_OPEN:
      const { type, title, message } = action;
      return $$state.merge({open: true, title: title, message: message});

    case actionTypes.MESSAGE_DIALOG_CLOSE:
      return $$state.set('open', false);

    default:
      return $$state;
  }
}
