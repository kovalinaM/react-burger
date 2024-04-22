import { TResetPasswordForm } from "../../types";
import { resetPasswordRequest } from "../../utils/api";
import { 
  RESET_PASSWORD_FORM_SUBMIT,
  RESET_PASSWORD_FORM_SUCCESS,
  RESET_PASSWORD_FORM_ERROR
} from "../constants";
import { AppDispatch } from "../types";

export interface IResetPasswordAction {
  readonly type: typeof RESET_PASSWORD_FORM_SUBMIT,
}

export interface IResetPasswordSuccessAction {
  readonly type: typeof RESET_PASSWORD_FORM_SUCCESS,
}

export interface IResetPasswordFailedAction {
  readonly type: typeof RESET_PASSWORD_FORM_ERROR,
}

export type TResetPasswordActions =
  | IResetPasswordAction
  | IResetPasswordSuccessAction
  | IResetPasswordFailedAction;

export const resetPasswordAction = (): IResetPasswordAction => ({
  type: RESET_PASSWORD_FORM_SUBMIT,
});

export const resetPasswordSuccessAction = (): IResetPasswordSuccessAction => ({
  type: RESET_PASSWORD_FORM_SUCCESS,
});

export const resetPasswordFailedAction = (): IResetPasswordFailedAction => ({
  type: RESET_PASSWORD_FORM_ERROR,
});

export function resetPassword(form: TResetPasswordForm) {
  return function (dispatch: AppDispatch) {
    dispatch(resetPasswordAction());
    resetPasswordRequest(form)
      .then((data) => {
        dispatch(resetPasswordSuccessAction());
      })
      .catch((err) => {
        dispatch(resetPasswordFailedAction());
        console.log(err);
      });
  };
}
