// This file is our manifest of all reducers for the app.
// See also /client/app/bundles/HelloWorld/store/signupFormStore.jsx
// A real world app will likely have many reducers and it helps to organize them in one file.
import signupFormReducer from './signupFormReducer';
import { $$initialState as $$signupFormState } from './signupFormReducer';
import messageDialogReducer from './messageDialogReducer';
import { $$initialState as $$messageDialogState } from './messageDialogReducer';

export default {
  $$signupFormStore: signupFormReducer,
  $$messageDialogStore: messageDialogReducer,
};

export const initialStates = {
  $$signupFormState,
  $$messageDialogState,
};
