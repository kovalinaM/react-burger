import { IFormEntryData } from './../../hocs/useForm';
import { forgotPasswordRequest } from "../../utils/api";
import {
  FORGOT_PASSWORD_FORM_SUBMIT,
  FORGOT_PASSWORD_FORM_SUCCESS,
  FORGOT_PASSWORD_FORM_ERROR,
} from "../constants";
import {AppThunk} from "../types";
import { TForgotPasswordForm } from "../../types";

export interface IForgotPasswordAction {
  readonly type: typeof FORGOT_PASSWORD_FORM_SUBMIT;
}

export interface IForgotPasswordSuccessAction {
  readonly type: typeof FORGOT_PASSWORD_FORM_SUCCESS;
}

export interface IForgotPasswordFailedAction {
  readonly type: typeof FORGOT_PASSWORD_FORM_ERROR;
}

export type TForgotPasswordActions =
  | IForgotPasswordAction
  | IForgotPasswordSuccessAction
  | IForgotPasswordFailedAction

export const forgotPasswordAction = (): IForgotPasswordAction => ({
  type: FORGOT_PASSWORD_FORM_SUBMIT,
});

export const forgotPasswordSuccessAction = (): IForgotPasswordSuccessAction => ({
  type: FORGOT_PASSWORD_FORM_SUCCESS,
});

export const forgotPasswordFailedAction = (): IForgotPasswordFailedAction => ({
  type: FORGOT_PASSWORD_FORM_ERROR,
});

export const forgotPassword = (form:  TForgotPasswordForm): AppThunk => {
  return (dispatch) => {
    dispatch(forgotPasswordAction());
    forgotPasswordRequest(form)
      .then(() => {
        dispatch(forgotPasswordSuccessAction());
      })
      .catch((err) => {
        dispatch(forgotPasswordFailedAction());
        console.log(err);
      });
  };
}
