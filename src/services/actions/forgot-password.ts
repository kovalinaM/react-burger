import { forgotPasswordRequest } from "../../utils/api";
import {
  FORGOT_PASSWORD_FORM_SUBMIT,
  FORGOT_PASSWORD_FORM_SUCCESS,
  FORGOT_PASSWORD_FORM_ERROR,
} from "../constants";
import {AppDispatch, AppThunk} from "../types";
import { TProfileForm } from "../../types";

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

export function forgotPassword(form: TProfileForm) {
  return function (dispatch: AppDispatch) {
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
