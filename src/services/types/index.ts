import { TBurgerConstructorActions } from './../actions/burger-constructor';
import { TBurgerIngredientsActions } from '../actions/ingredients';
import { TIngredientDetailsActions } from "../actions/ingredient-details"
import { TOrderDetailsActions } from '../actions/order';
import { TProfileActions } from '../actions/profile';
import { TRegisterActions } from '../actions/register';
import { TLoginActions } from '../actions/login';
import { TForgotPasswordActions } from '../actions/forgot-password';
import { TResetPasswordActions } from '../actions/reset-password';
import {TFeedActions} from '../actions/feed';
import type { ThunkAction, ThunkDispatch } from 'redux-thunk';
import {TypedUseSelectorHook, useSelector as selectorHook, useDispatch as dispatchHook } from "react-redux";
import type {} from "redux-thunk";
import { rootReducer } from '../store';
import { TWSActions } from '../actions/wsActions';
import { TWSUserOrdersActions } from "../actions/wsUserOrderActions";


type TAppActions =
    | TBurgerConstructorActions
    | TBurgerIngredientsActions
    | TIngredientDetailsActions
    | TOrderDetailsActions
    | TProfileActions
    | TRegisterActions
    | TLoginActions
    | TForgotPasswordActions
    | TResetPasswordActions
    | TWSActions
    | TWSUserOrdersActions
    | TFeedActions;

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = ThunkDispatch<RootState, unknown, TAppActions>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  TAppActions
>;

export const useDispatch: () => AppDispatch = dispatchHook;
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
