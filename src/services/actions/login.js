import { loginRequest } from "../../utils/api";

export const LOGIN_FORM_SUBMIT = "LOGIN_FORM_SUBMIT";
export const LOGIN_FORM_SUCCESS = "LOGIN_FORM_SUCCESS";
export const LOGIN_FORM_ERROR = "LOGINT_FORM_ERROR";

export function login(form) {
  return function (dispatch) {
    dispatch({
      type: LOGIN_FORM_SUBMIT,
    });
    loginRequest(form)
      .then((data) => {
        dispatch({
          type: LOGIN_FORM_SUCCESS,
          user: data.user,
        });
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_FORM_ERROR,
        });
        console.log(err);
      });
  };
}
