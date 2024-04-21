import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  SET_BUNS,
  MOVE_INGREDIENT,
  RESET_INGREDIENTS,
} from "../constants";
import { TIngredientConstructor, TBun } from "../../types";

export interface ISetBunsAction {
  readonly type: typeof SET_BUNS;
  readonly bun: TBun;
}

export interface IAddIngredientAction {
  readonly type: typeof ADD_INGREDIENT;
  readonly ingredient: TIngredientConstructor;
}

export interface IDeleteIngredientAction {
  readonly type: typeof DELETE_INGREDIENT;
  readonly uniqId: string;
}

export interface IMoveIngredientAction {
  readonly type: typeof MOVE_INGREDIENT;
  readonly dragIndex: number;
  readonly hoverIndex: number;
}

export interface IClearConstructor {
  readonly type: typeof RESET_INGREDIENTS;
}

export type TBurgerConstructorActions =
  | ISetBunsAction
  | IAddIngredientAction
  | IDeleteIngredientAction
  | IMoveIngredientAction
  | IClearConstructor;

export const setBunsAction = (bun: TBun): ISetBunsAction => ({
  type: SET_BUNS,
  bun,
});

export const addIngredientAction = (
  ingredient: TIngredientConstructor
): IAddIngredientAction => ({
  type: ADD_INGREDIENT,
  ingredient,
});

export const deleteIngredientAction = (
  uniqId: string
): IDeleteIngredientAction => ({
  type: DELETE_INGREDIENT,
  uniqId,
});

export const moveIngredientAction = (
  dragIndex: number,
  hoverIndex: number
): IMoveIngredientAction => ({
  type: MOVE_INGREDIENT,
  dragIndex,
  hoverIndex,
});

export const clearConstructorAction = (): IClearConstructor => ({
  type: RESET_INGREDIENTS,
});
