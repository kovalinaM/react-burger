import { forgotPasswordRequest } from "../../utils/api";

export const FORGOT_PASSWORD_FORM_SUBMIT = "FORGOT_PASSWORD_FORM_SUBMIT";
export const FORGOT_PASSWORD_FORM_SUCCESS = "FORGOT_PASSWORD_FORM_SUCCESS";
export const FORGOT_PASSWORD_FORM_ERROR = "FORGOT_PASSWORD_FORM_ERROR";

export function forgotPassword(form) {
  return function (dispatch) {
    dispatch({
      type: FORGOT_PASSWORD_FORM_SUBMIT,
    });
    forgotPasswordRequest(form)
      .then(() => {
        dispatch({
          type: FORGOT_PASSWORD_FORM_SUCCESS,
        });
      })
      .catch((err) => {
        dispatch({
          type: FORGOT_PASSWORD_FORM_ERROR,
        });
        console.log(err);
      });
  };
}
