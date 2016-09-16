// See https://www.npmjs.com/package/mirror-creator
// Allows us to set up constants in a slightly more concise syntax. See:
// client/app/bundles/HelloWorld/actions/helloWorldActionCreators.jsx
import mirrorCreator from 'mirror-creator';

const actionTypes = mirrorCreator([
  'SIGNUP_FORM_UPDATE_ATTRIBUTE',
  'SIGNUP_FORM_POST_SUBMIT',
  'SIGNUP_FORM_UPDATE_VALID_STATUS',
  'MESSAGE_DIALOG_OPEN',
  'MESSAGE_DIALOG_CLOSE',
]);

// actionTypes = {HELLO_WORLD_NAME_UPDATE: "HELLO_WORLD_NAME_UPDATE"}
// Notice how we don't have to duplicate HELLO_WORLD_NAME_UPDATE twice
// thanks to mirror-creator.
export default actionTypes;
