import {
  REGISTER_FORM_SUBMIT,
  REGISTER_FORM_SUCCESS,
  REGISTER_FORM_ERROR,
  LOGIN_FORM_SUBMIT,
  LOGIN_FORM_SUCCESS,
  LOGIN_FORM_ERROR,
  FORGOT_PASSWORD_FORM_SUBMIT,
  FORGOT_PASSWORD_FORM_SUCCESS,
  FORGOT_PASSWORD_FORM_ERROR,
  RESET_PASSWORD_FORM_SUBMIT,
  RESET_PASSWORD_FORM_SUCCESS,
  RESET_PASSWORD_FORM_ERROR,
  EDIT_PROFILE_FORM_SUBMIT,
  EDIT_PROFILE_FORM_ERROR,
  EDIT_PROFILE_FORM_SUCCESS,
  GET_USER_ERROR,
  GET_USER_REQUEST,
  GET_USER_SUCCESS, LOGOUT_ERROR, LOGOUT_REQUEST, LOGOUT_SUCCESS, REFRESH_TOKEN_ERROR,
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_SUCCESS,
} from '../constants';
import { TProfileForm } from '../../types';
import { TRegisterActions } from '../actions/register';
import { TForgotPasswordActions } from '../actions/forgot-password';
import { TResetPasswordActions } from '../actions/reset-password';
import { TLoginActions } from '../actions/login';
import { TProfileActions } from '../actions/profile';


type TAuthState = {
  isAuthenticated: boolean;
  user: TProfileForm;
  registerRequest: boolean;
  registerError: boolean;

  loginRequest: boolean;
  loginError: boolean;

  forgotPasswordRequest: boolean;
  forgotPasswordSuccess: boolean;
  forgotPasswordError: boolean;

  resetPasswordRequest: boolean;
  resetPasswordSuccess: boolean;
  resetPasswordError: boolean;

  editProfileRequest: boolean;
  editProfileError: boolean;

  getUserRequest: boolean;
  getUserError: boolean;

  refreshTokenRequest: boolean;
  refreshTokenError: boolean;

  logoutRequest: boolean;
  logoutError:boolean;
}

type TAuthActions = 
  | TRegisterActions
  | TForgotPasswordActions
  | TResetPasswordActions
  | TLoginActions
  | TProfileActions


export const InitialState: TAuthState  = {
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

  editProfileRequest: false,
  editProfileError: false,

  getUserRequest: false,
  getUserError: false,

  refreshTokenRequest: false,
  refreshTokenError: false,

  logoutRequest: false,
  logoutError: false
};

export const AuthReducer = (state = InitialState, action: TAuthActions): TAuthState => {
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
        forgotPasswordError: false,
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
        forgotPasswordError: true,
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
    case EDIT_PROFILE_FORM_SUBMIT: {
      return {
        ...state,
        editProfileRequest: true,
        editProfileError: false,
      }
    }
    case EDIT_PROFILE_FORM_SUCCESS: {
      return {
        ...state,
        editProfileRequest: false,
        user: {
          ...state.user,
          name: action.user.name,
          email: action.user.email,
        }
      }
    }
    case EDIT_PROFILE_FORM_ERROR: {
      return {
        ...state,
        editProfileRequest: false,
        editProfileError: true,
      }
    }
    case GET_USER_REQUEST: {
      return {
        ...state,
        getUserRequest: true,
        getUserError: false,
      }
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        getUserRequest: false,
        isAuthenticated: true,
        user: {
          ...state.user,
          name: action.user.name,
          email: action.user.email,
        }
      }
    }
    case GET_USER_ERROR: {
      return {
        ...state,
        getUserRequest: false,
        getUserError: true,
        isAuthenticated: false,
      }
    }
    case REFRESH_TOKEN_REQUEST: {
      return {
        ...state,
        refreshTokenRequest: true,
        refreshTokenError: false,
        getUserError: false,
        editProfileError: false,
      }
    }
    case REFRESH_TOKEN_SUCCESS: {
      return {
        ...state,
        refreshTokenRequest: false,
        isAuthenticated: true
      }
    }
    case REFRESH_TOKEN_ERROR: {
      return {
        ...state,
        refreshTokenRequest: false,
        refreshTokenError: true,
        isAuthenticated: false,
      }
    }
    case LOGOUT_REQUEST: {
      return {
        ...state,
        isAuthenticated: false,
        logoutRequest: true,
        logoutError: false,
      }
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        logoutRequest: false,
      }
    }
    case LOGOUT_ERROR: {
      return {
        ...state,
        logoutRequest: false,
        logoutError: true,
      }
    }
    default: {
      return state;
    }
  }
};
