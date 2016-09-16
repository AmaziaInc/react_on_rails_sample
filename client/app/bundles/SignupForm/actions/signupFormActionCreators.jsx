import actionTypes from '../constants/signupFormConstants';

export function updateAttribute(name, value) {
  return {
    type: actionTypes.SIGNUP_FORM_UPDATE_ATTRIBUTE,
    name,
    value,
  };
}

export function updateValidStatus(isValid) {
  return {
    type: actionTypes.SIGNUP_FORM_UPDATE_VALID_STATUS,
    isValid
  };
}

export function submit() {
  return (dispatch, getState) => {
    const $$state = getState().$$signupFormStore;
    $.post("/users",
      {user:
        {
          name: $$state.get('name'),
          email: $$state.get('email'),
          password: $$state.get('password'),
        }
      }, (data) => {
        dispatch(openDialog('Signup', 'Success'));
        dispatch(postSubmit(data));
      }, 'json'
    );
  };
}

export function postSubmit(data) {
  return {
    type: actionTypes.SIGNUP_FORM_POST_SUBMIT,
    result: data.result,
  };
}

export function openDialog(title, message) {
  return {
    type: actionTypes.MESSAGE_DIALOG_OPEN,
    title,
    message,
  };
}

export function closeDialog() {
  return {
    type: actionTypes.MESSAGE_DIALOG_CLOSE,
  };
}
