import { getIngredients } from "../../utils/api";
import { AppDispatch, AppThunk } from "../types";
import {
  INGREDIENTS_GET_REQUEST,
  INGREDIENTS_GET_FAILED,
  INGREDIENTS_GET_SUCCESS,
  INCREASE_INGREDIENT,
  DECREASE_INGREDIENT,
  RESET_COUNT_INGREDIENT,
  CHANGE_BUNS,
  TAB_SWITCH,
} from "../constants";
import { TIngredient } from "../../types";

export interface IGetIngredientsAction {
  readonly type: typeof INGREDIENTS_GET_REQUEST;
}

export interface IGetIngredientsSuccessAction {
  readonly type: typeof INGREDIENTS_GET_SUCCESS;
  readonly ingredients: TIngredient[];
}

export interface IGetIngredientsFailedAction {
  readonly type: typeof INGREDIENTS_GET_FAILED;
}

export interface IIncreaseIngredientAction {
  readonly type: typeof INCREASE_INGREDIENT;
  readonly _id: string;
}

export interface IDecreaseIngredientAction {
  readonly type: typeof DECREASE_INGREDIENT;
  readonly _id: string;
}

export interface IClearQuantityAction {
  readonly type: typeof RESET_COUNT_INGREDIENT;
}

export interface IChangeBunsAction {
  readonly type: typeof CHANGE_BUNS;
  readonly _id: string;
}

export interface IChangeTabAction {
  readonly type: typeof TAB_SWITCH;
  readonly currentTab: string;
}

export type TBurgerIngredientsActions =
  | IGetIngredientsAction
  | IGetIngredientsSuccessAction
  | IGetIngredientsFailedAction
  | IIncreaseIngredientAction
  | IDecreaseIngredientAction
  | IClearQuantityAction
  | IChangeBunsAction
  | IChangeTabAction;

export const getIngredientsAction = (): IGetIngredientsAction => ({
  type: INGREDIENTS_GET_REQUEST,
});

export const getIngredientsSuccessAction = (
  ingredients: TIngredient[]
): IGetIngredientsSuccessAction => ({
  type: INGREDIENTS_GET_SUCCESS,
  ingredients,
});

export const getIngredientsFailedAction = (): IGetIngredientsFailedAction => ({
  type: INGREDIENTS_GET_FAILED,
});

export const increaseIngredientAction = (
  _id: string
): IIncreaseIngredientAction => ({
  type: INCREASE_INGREDIENT,
  _id,
});

export const decreaseIngredientAction = (
  _id: string
): IDecreaseIngredientAction => ({
  type: DECREASE_INGREDIENT,
  _id,
});

export const clearQuantityAction = (): IClearQuantityAction => ({
  type: RESET_COUNT_INGREDIENT,
});

export const changeBunsAction = (_id: string): IChangeBunsAction => ({
  type: CHANGE_BUNS,
  _id,
});

export const changeTabAction = (currentTab: string): IChangeTabAction => ({
  type: TAB_SWITCH,
  currentTab,
});

export const getIngredientsList: AppThunk<void> = () => async (dispatch: AppDispatch) => {
    dispatch(getIngredientsAction());
    try {
        const res = await getIngredients();
        if (res && res.success) {
            const ingredients = res.data.map((ingredient: TIngredient) => ({ ...ingredient, count: 0 }));
            dispatch(getIngredientsSuccessAction(ingredients));
        } else {
            dispatch(getIngredientsFailedAction());
        }
    } catch (err) {
        dispatch(getIngredientsFailedAction());
    }
};
