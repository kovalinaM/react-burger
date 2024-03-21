import { resetPasswordRequest } from "../../utils/api";

export const RESET_PASSWORD_FORM_SUBMIT = "RESET_PASSWORD_FORM_SUBMIT";
export const RESET_PASSWORD_FORM_SUCCESS = "RESET_PASSWORD_FORM_SUCCESS";
export const RESET_PASSWORD_FORM_ERROR = "RESET_PASSWORD_FORM_ERROR";

export function resetPassword(form) {
  return function (dispatch) {
    dispatch({
      type: RESET_PASSWORD_FORM_SUBMIT,
    });
    resetPasswordRequest(form)
      .then((data) => {
        dispatch({
          type: RESET_PASSWORD_FORM_SUCCESS,
        });
      })
      .catch((err) => {
        dispatch({
          type: RESET_PASSWORD_FORM_ERROR,
        });
        console.log(err);
      });
  };
}
