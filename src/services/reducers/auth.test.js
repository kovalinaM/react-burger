import { AuthReducer, InitialState } from "./auth";
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


describe("authReducer", () => {
    it('should return the initial state', () => {
        expect(AuthReducer(undefined, {})).toEqual(
            InitialState
        )
    })

    it('should handle REGISTER_FORM_SUBMIT', () => {
        const action = {
            type: REGISTER_FORM_SUBMIT,
        };
        expect(AuthReducer(InitialState, action)).toEqual({
            ...InitialState,
            registerRequest: true,
            registerError: false,
        });
    });

    it('should handle REGISTER_FORM_SUCCESS', () => {
        const action = {
            type: REGISTER_FORM_SUCCESS,
            user: {
                name: 'name',
                email: '',
            }
        };
        expect(AuthReducer(InitialState, action)).toEqual({
            ...InitialState,
            registerRequest: false,
            user: {
                ...InitialState.user,
                name: action.user.name,
                email: action.user.email,
            },
            isAuthenticated: true,
        });
    });

    it('should handle REGISTER_FORM_ERROR', () => {
        const action = {
            type: REGISTER_FORM_ERROR,
        };
        expect(AuthReducer(InitialState, action)).toEqual({
            ...InitialState,
            registerRequest: false,
            registerError: true,
        });
    });

    it('should handle LOGIN_FORM_SUBMIT', () => {
        const action = {
            type: LOGIN_FORM_SUBMIT,
        };
        expect(AuthReducer(InitialState, action)).toEqual({
            ...InitialState,
            loginRequest: true,
            loginError: false,
        })
    });

    it('should handle LOGIN_FORM_SUCCESS', () => {
        const action = {
            type: LOGIN_FORM_SUCCESS,
            user: {
                name: '',
                email: '',
            }
        };
        expect(AuthReducer(InitialState, action)).toEqual({
            ...InitialState,
            loginRequest: false,
            user: {
                ...InitialState.user,
                name: action.user.name,
                email: action.user.email,
            },
            isAuthenticated: true,
        });
    });

    it('should handle LOGIN_FORM_ERROR', () => {
        const action = {
            type: LOGIN_FORM_ERROR,
        };
        expect(AuthReducer(InitialState, action)).toEqual({
            ...InitialState,
            loginRequest: false,
            loginError: true,
        })
    });

    it('should handle FORGOT_PASSWORD_FORM_SUBMIT', () => {
        const action = {
            type: FORGOT_PASSWORD_FORM_SUBMIT,
        };
        expect(AuthReducer(InitialState, action)).toEqual({
            ...InitialState,
            forgotPasswordRequest: true,
            forgotPasswordError: false,
            forgotPasswordSuccess: false,
        })
    });

    it('should handle FORGOT_PASSWORD_FORM_SUCCESS', () => {
        const action = {
            type: FORGOT_PASSWORD_FORM_SUCCESS,
        };
        expect(AuthReducer(InitialState, action)).toEqual({
            ...InitialState,
            forgotPasswordRequest: false,
            forgotPasswordSuccess: true,
        })
    });

    it('should handle FORGOT_PASSWORD_FORM_ERROR', () => {
        const action = {
            type: FORGOT_PASSWORD_FORM_ERROR,
        };
        expect(AuthReducer(InitialState, action)).toEqual({
            ...InitialState,
            forgotPasswordRequest: false,
            forgotPasswordError: true,
        })
    });

    it('should handle RESET_PASSWORD_FORM_SUBMIT', () => {
        const action = {
            type: RESET_PASSWORD_FORM_SUBMIT,
        };
        expect(AuthReducer(InitialState, action)).toEqual({
            ...InitialState,
            resetPasswordRequest: true,
            resetPasswordError: false,
            resetPasswordSuccess: false,
        })
    });

    it('should handle RESET_PASSWORD_FORM_SUCCESS', () => {
        const action = {
            type: RESET_PASSWORD_FORM_SUCCESS,
        };
        expect(AuthReducer(InitialState, action)).toEqual({
            ...InitialState,
            resetPasswordRequest: false,
            resetPasswordSuccess: true,
        })
    });

    it('should handle RESET_PASSWORD_FORM_ERROR', () => {
        const action = {
            type: RESET_PASSWORD_FORM_ERROR,
        };
        expect(AuthReducer(InitialState, action)).toEqual({
            ...InitialState,
            resetPasswordRequest: false,
            resetPasswordError: true,
        })
    });

    it('should handle EDIT_PROFILE_FORM_SUBMIT', () => {
        const action = {
            type: EDIT_PROFILE_FORM_SUBMIT,
        };
        expect(AuthReducer(InitialState, action)).toEqual({
            ...InitialState,
            editProfileRequest: true,
            editProfileError: false,
        })
    });

    it('should handle EDIT_PROFILE_FORM_SUCCESS', () => {
        const action = {
            type: EDIT_PROFILE_FORM_SUCCESS,
            user: {
                name: '',
                email: '',
            }
        };
        expect(AuthReducer(InitialState, action)).toEqual({
            ...InitialState,
            editProfileRequest: false,
            user: {
                ...InitialState.user,
                name: action.user.name,
                email: action.user.email,
            }
        });
    });

    it('should handle EDIT_PROFILE_FORM_ERROR', () => {
        const action = {
            type: EDIT_PROFILE_FORM_ERROR,
            message: '',
        };
        expect(AuthReducer(InitialState, action)).toEqual({
            ...InitialState,
            editProfileRequest: false,
            editProfileError: true,
        })
    });

    it('should handle GET_USER_REQUEST', () => {
        const action = {
            type: GET_USER_REQUEST,
        };
        expect(AuthReducer(InitialState, action)).toEqual({
            ...InitialState,
            getUserRequest: true,
            getUserError: false,
        })
    });

    it('should handle GET_USER_SUCCESS', () => {
        const action = {
            type: GET_USER_SUCCESS,
            user: {
                name: '',
                email: '',
            }
        };
        expect(AuthReducer(InitialState, action)).toEqual({
            ...InitialState,
            getUserRequest: false,
            isAuthenticated: true,
            user: {
                ...InitialState.user,
                name: action.user.name,
                email: action.user.email,
            }
        });
    });

    it('should handle GET_USER_ERROR', () => {
        const action = {
            type: GET_USER_ERROR,
            message: ''
        };
        expect(AuthReducer(InitialState, action)).toEqual({
            ...InitialState,
            getUserRequest: false,
            getUserError: true,
            isAuthenticated: false,
        })
    });

    it('should handle REFRESH_TOKEN_REQUEST', () => {
        const action = {
            type: REFRESH_TOKEN_REQUEST,
        };
        expect(AuthReducer(InitialState, action)).toEqual({
            ...InitialState,
            refreshTokenRequest: true,
            refreshTokenError: false,
            getUserError: false,
            editProfileError: false,
            })
        });
    
    it('should handle REFRESH_TOKEN_SUCCESS', () => {
        const action = {
            type: REFRESH_TOKEN_SUCCESS,
        };
        expect(AuthReducer(InitialState, action)).toEqual({
            ...InitialState,
            refreshTokenRequest: false,
            isAuthenticated: true
        });
    });

    it('should handle REFRESH_TOKEN_ERROR', () => {
        const action = {
            type: REFRESH_TOKEN_ERROR,
        };
        expect(AuthReducer(InitialState, action)).toEqual({
            ...InitialState,
            refreshTokenRequest: false,
            refreshTokenError: true,
            isAuthenticated: false,
        })
    });

    it('should handle LOGOUT_REQUEST', () => {
        const action = {
            type: LOGOUT_REQUEST,
        };
        expect(AuthReducer(InitialState, action)).toEqual({
            ...InitialState,
            isAuthenticated: false,
            logoutRequest: true,
            logoutError: false,
        })
    });
    
    it('should handle LOGOUT_SUCCESS', () => {
        const action = {
            type: LOGOUT_SUCCESS,
        };
        expect(AuthReducer(InitialState, action)).toEqual({
            ...InitialState,
            logoutRequest: false,
        });
    });
    
    it('should handle LOGOUT_ERROR', () => {
        const action = {
            type: LOGOUT_ERROR,
        };
        expect(AuthReducer(InitialState, action)).toEqual({
            ...InitialState,
            logoutRequest: false,
            logoutError: true,
        })
    });
})