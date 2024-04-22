import { 
  LOGIN_FORM_SUBMIT,
  LOGIN_FORM_SUCCESS,
  LOGIN_FORM_ERROR
} from './../constants';
import {AppDispatch} from "../types";
import { TUserData, TProfileForm } from '../../types';
import { loginRequest } from "../../utils/api";
import { IFormEntryData } from '../../hocs/useForm';

export interface ILoginAction {
  readonly type: typeof LOGIN_FORM_SUBMIT;
}

export interface ILoginSuccessAction {
  readonly type: typeof LOGIN_FORM_SUCCESS;
  readonly user: TUserData;
}

export interface ILoginFailedAction {
  readonly type: typeof LOGIN_FORM_ERROR;
}

export type TLoginActions =
  | ILoginAction
  | ILoginSuccessAction
  | ILoginFailedAction;

export const loginAction = (): ILoginAction => ({
  type: LOGIN_FORM_SUBMIT,
});

export const loginSuccessAction = (user: TUserData): ILoginSuccessAction => ({
  type: LOGIN_FORM_SUCCESS,
  user,
});

export const loginFailedAction = (): ILoginFailedAction => ({
  type: LOGIN_FORM_ERROR,
});


export function login(form: IFormEntryData) {
  return function (dispatch: AppDispatch) {
    dispatch(loginAction());
    loginRequest(form)
      .then((data) => {
        dispatch(loginSuccessAction(data.user));
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
      })
      .catch((err) => {
        dispatch(loginFailedAction());
        console.log(err);
      });
  };
}
