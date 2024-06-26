import { postOrder } from "../../utils/api";
import {
  OPEN_ORDER_MODAL,
  CLOSE_ORDER_MODAL,
  ORDER_POST_REQUEST,
  ORDER_POST_SUCCESS,
  ORDER_POST_FAILED,
} from "../constants";

import { AppThunk } from "../types";
import { TIngredientConstructor, TOrderNumber } from "../../types";

export interface IOpenOrderDetailsModal {
  readonly type: typeof OPEN_ORDER_MODAL;
}

export interface ICloseOrderDetailsModal {
  readonly type: typeof CLOSE_ORDER_MODAL;
}

export interface IOrderPostAction {
  readonly type: typeof ORDER_POST_REQUEST;
}

export interface IOrderPostSuccessAction {
  readonly type: typeof ORDER_POST_SUCCESS;
  readonly orderId: string;
}

export interface IOrderPostFailedAction {
  readonly type: typeof ORDER_POST_FAILED;
}

export type TOrderDetailsActions =
  | IOpenOrderDetailsModal
  | ICloseOrderDetailsModal
  | IOrderPostAction
  | IOrderPostSuccessAction
  | IOrderPostFailedAction;

export const openOrderDetailsModal = (): IOpenOrderDetailsModal => ({
  type: OPEN_ORDER_MODAL,
});

export const closeOrderDetailsModal = (): ICloseOrderDetailsModal => ({
  type: CLOSE_ORDER_MODAL,
});

export const postOrderAction = (): IOrderPostAction => ({
  type: ORDER_POST_REQUEST,
});

export const postOrderSuccessAction = (
  orderId: string
): IOrderPostSuccessAction => ({
  type: ORDER_POST_SUCCESS,
  orderId,
});

export const postOrderFailedAction = (): IOrderPostFailedAction => ({
  type: ORDER_POST_FAILED,
});

export const createOrder = (
  ingredients: string[]
): AppThunk => {
  return (dispatch) => {
    dispatch(postOrderAction());
    return postOrder(ingredients)
      .then((res) => {
        const orderId = res.order.number.toString();
        return dispatch(postOrderSuccessAction(orderId));
      })
      .catch((err) => {
        return dispatch(postOrderFailedAction());
      });
  };
};
