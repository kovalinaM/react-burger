import {
  OPEN_INGREDIENT_MODAL,
  CLOSE_INGREDIENT_MODAL,
  SELECT_INGREDIENT,
  UNSELECT_INGREDIENT,
} from "../constants";
import { TIngredient } from "../../types";


export interface ISelectIngredientAction {
  readonly type: typeof SELECT_INGREDIENT;
  readonly selectedIngredient: TIngredient;
}

export interface IUnselectIngredientAction {
  readonly type: typeof UNSELECT_INGREDIENT;
}

export interface IOpenIngredientDetailsModalAction {
  readonly type: typeof OPEN_INGREDIENT_MODAL;
}

export interface ICloseIngredientDetailsModalAction {
  readonly type: typeof CLOSE_INGREDIENT_MODAL;
}

export type TIngredientDetailsActions =
  | ISelectIngredientAction
  | IUnselectIngredientAction
  | IOpenIngredientDetailsModalAction
  | ICloseIngredientDetailsModalAction;

export const selectIngredientAction = (
  selectedIngredient: TIngredient
): ISelectIngredientAction => ({
  type: SELECT_INGREDIENT,
  selectedIngredient,
});

export const unselectIngredientAction = (): IUnselectIngredientAction => ({
  type: UNSELECT_INGREDIENT,
});

export const openIngredientDetailsModalAction =
  (): IOpenIngredientDetailsModalAction => ({
    type: OPEN_INGREDIENT_MODAL,
  });

export const closeIngredientDetailsModalAction =
  (): ICloseIngredientDetailsModalAction => ({
    type: CLOSE_INGREDIENT_MODAL,
  });


export function selectIngredient(ingredient: TIngredient) {
     return {
        type: SELECT_INGREDIENT,
        selectedIngredient: ingredient,
    };
}