import { registerRequest } from "../../utils/api";

export const REGISTER_FORM_SUBMIT = "REGISTER_FORM_SUBMIT";
export const REGISTER_FORM_SUCCESS = "REGISTER_FORM_SUCCESS";
export const REGISTER_FORM_ERROR = "REGISTER_FORM_ERROR";

export function register(form) {
  return function (dispatch) {
    dispatch({
      type: REGISTER_FORM_SUBMIT,
    });
    registerRequest(form)
      .then((data) => {
        dispatch({
          type: REGISTER_FORM_SUCCESS,
          user: data.user,
        });

        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
      })
      .catch((err) => {
        dispatch({
          type: REGISTER_FORM_ERROR,
        });
        console.log(err);
      });
  };
}
