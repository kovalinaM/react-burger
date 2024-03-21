import {
  REGISTER_FORM_SUBMIT,
  REGISTER_FORM_SUCCESS,
  REGISTER_FORM_ERROR,
} from "../actions/register";

import {
  LOGIN_FORM_SUBMIT,
  LOGIN_FORM_SUCCESS,
  LOGIN_FORM_ERROR
} from "../actions/login";

import {
  FORGOT_PASSWORD_FORM_SUBMIT,
  FORGOT_PASSWORD_FORM_SUCCESS,
  FORGOT_PASSWORD_FORM_ERROR
} from "../actions/forgot-password";

import {
  RESET_PASSWORD_FORM_SUBMIT,
  RESET_PASSWORD_FORM_SUCCESS,
  RESET_PASSWORD_FORM_ERROR
} from "../actions/reset-password";

const InitialState = {
  isAuthenticated: false,

  user: {
    name: "",
    email: "",
    password: "",
  },

  registerRequest: false,
  registerError: false,

  loginRequest: false,
  loginError: false,

  forgotPasswordRequest: false,
  forgotPasswordSuccess: false,
  forgotPasswordError: false,

  resetPasswordRequest: false,
  resetPasswordSuccess: false,
  resetPasswordError: false,
};

export const AuthReducer = (state = InitialState, action) => {
  switch (action.type) {
    case REGISTER_FORM_SUBMIT: {
      return {
        ...state,
        registerRequest: true,
        registerError: false,
      };
    }
    case REGISTER_FORM_SUCCESS: {
      return {
        ...state,
        registerRequest: false,
        user: {
          ...state.user,
          name: action.user.name,
          email: action.user.email,
        },
        isAuthenticated: true,
      };
    }
    case REGISTER_FORM_ERROR: {
      return {
        ...state,
        registerRequest: false,
        registerError: true,
      };
    }
    case LOGIN_FORM_SUBMIT: {
      return {
        ...state,
        loginRequest: true,
        loginError: false,
      }
    }
    case LOGIN_FORM_SUCCESS: {
      return {
        ...state,
        loginRequest: false,
        user: {
          ...state.user,
          name: action.user.name,
          email: action.user.email,
        },
        isAuthenticated: true,
      }
    }
    case LOGIN_FORM_ERROR: {
      return {
        ...state,
        loginRequest: false,
        loginError: true,
      }
    }
    case FORGOT_PASSWORD_FORM_SUBMIT: {
      return {
        ...state,
        forgotPasswordRequest: true,
        forgotPasswordFailed: false,
        forgotPasswordSuccess: false,
      }
    }
    case FORGOT_PASSWORD_FORM_SUCCESS: {
      return {
        ...state,
        forgotPasswordRequest: false,
        forgotPasswordSuccess: true,
      }
    }
    case FORGOT_PASSWORD_FORM_ERROR: {
      return {
        ...state,
        forgotPasswordRequest: false,
        forgotPasswordFailed: true,
      }
    }
    case RESET_PASSWORD_FORM_SUBMIT: {
      return {
        ...state,
        resetPasswordRequest: true,
        resetPasswordError: false,
        resetPasswordSuccess: false,
      }
    }
    case RESET_PASSWORD_FORM_SUCCESS: {
      return {
        ...state,
        resetPasswordRequest: false,
        resetPasswordSuccess: true,
      }
    }
    case RESET_PASSWORD_FORM_ERROR: {
      return {
        ...state,
        resetPasswordRequest: false,
        resetPasswordError: true,
      }
    }
    default: {
      return state;
    }
  }
};
