import {
  logoutRequest,
  getUserRequest,
  updateUserRequest,
  refreshTokenRequest
} from "../../utils/api";

export const EDIT_PROFILE_FORM_SUBMIT = "EDIT_PROFILE_FORM_SUBMIT";
export const EDIT_PROFILE_FORM_SUCCESS = "EDIT_PROFILE_FORM_SUCCESS";
export const EDIT_PROFILE_FORM_ERROR = "EDIT_PROFILE_FORM_ERROR";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_ERROR = "GET_USER_ERROR";

export const REFRESH_TOKEN_REQUEST = "REFRESH_TOKEN_REQUEST";
export const REFRESH_TOKEN_SUCCESS = "REFRESH_TOKEN_SUCCESS";
export const REFRESH_TOKEN_ERROR = "REFRESH_TOKEN_ERROR";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_ERROR = "LOGOUT_ERROR";

export function editProfile(form) {
  return function (dispatch) {
    dispatch({
      type: EDIT_PROFILE_FORM_SUBMIT,
    });
    updateUserRequest(form)
      .then((data) => {
        dispatch({
          type: EDIT_PROFILE_FORM_SUCCESS,
          user: data.user,
        });
      })
      .catch((err) => {
        if (err.message === "jwt expired") {
          dispatch(refreshToken());
        } else {
          dispatch({
            type: EDIT_PROFILE_FORM_ERROR,
            message: err.message,
          });
        }
      });
  };
}

export function getUser() {
  return function (dispatch) {
    dispatch({
      type: GET_USER_REQUEST,
    });
    getUserRequest()
      .then((data) => {
        dispatch({
          type: GET_USER_SUCCESS,
          user: data.user,
        });
      })
      .catch((err) => {
        if (err.message === "jwt expired") {
          dispatch(refreshToken());
        } else {
          dispatch({
            type: GET_USER_ERROR,
            message: err.message,
          });
          console.log(err);
        }
      });
  };
}

export function refreshToken() {
  return function (dispatch) {
    dispatch({
      type: REFRESH_TOKEN_REQUEST,
    });
    refreshTokenRequest()
      .then((data) => {
        dispatch({
          type: REFRESH_TOKEN_SUCCESS,
        });
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');

        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
      })
      .catch((err) => {
        console.error('Failed to refresh token:', err);
        dispatch({
          type: REFRESH_TOKEN_ERROR,
        });
        console.log(err);
      });
  };
}

export function logout() {
  return function (dispatch) {
    dispatch({
      type: LOGOUT_REQUEST,
    });
    logoutRequest()
      .then(() => {
        dispatch({
          type: LOGOUT_SUCCESS,
        });
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
      })
      .catch((err) => {
        dispatch({
          type: LOGOUT_ERROR,
        });
        console.log(err);
      });
  };
}
