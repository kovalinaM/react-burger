import { TRegisterForm, TUserData } from './../../types';
import { 
  REGISTER_FORM_SUBMIT,
  REGISTER_FORM_SUCCESS,
  REGISTER_FORM_ERROR
} from './../constants';
import { registerRequest } from "../../utils/api";
import { AppThunk } from '../types';

export interface IRegisterAction {
  readonly type: typeof REGISTER_FORM_SUBMIT;
}

export interface IRegisterSuccessAction {
  readonly type: typeof REGISTER_FORM_SUCCESS;
  readonly user: TUserData;
}

export interface IRegisterFailedAction {
  readonly type: typeof REGISTER_FORM_ERROR;
}

export type TRegisterActions =
  | IRegisterAction
  | IRegisterSuccessAction
  | IRegisterFailedAction;

export const registerAction = (): IRegisterAction => ({
  type: REGISTER_FORM_SUBMIT,
});

export const registerSuccessAction = (user: TUserData): IRegisterSuccessAction => ({
  type: REGISTER_FORM_SUCCESS,
  user,
});

export const registerFailedAction = (): IRegisterFailedAction => ({
  type: REGISTER_FORM_ERROR,
});

export const register = (form: TRegisterForm): AppThunk => {
  return (dispatch) => {
    dispatch(registerAction());
    registerRequest(form)
      .then((data) => {
        dispatch(registerSuccessAction(data.user));
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
      })
      .catch((err) => {
        dispatch(registerFailedAction());
        console.log(err);
      });
  };
}
