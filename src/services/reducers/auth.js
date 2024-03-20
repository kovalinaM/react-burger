import {
  REGISTER_FORM_SUBMIT,
  REGISTER_FORM_SUCCESS,
  REGISTER_FORM_ERROR,
} from "../actions/register";

const InitialState = {
  isAuthenticated: false,

  user: {
    name: "",
    email: "",
    password: "",
  },

  registerRequest: false,
  registerError: false,
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
    default: {
      return state;
    }
  }
};
