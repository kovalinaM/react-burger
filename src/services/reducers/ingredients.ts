import {
  INGREDIENTS_GET_REQUEST,
  INGREDIENTS_GET_SUCCESS,
  INGREDIENTS_GET_FAILED,
  INCREASE_INGREDIENT,
  RESET_COUNT_INGREDIENT,
  DECREASE_INGREDIENT,
  CHANGE_BUNS,
  TAB_SWITCH,
} from "../constants";
import { TIngredient } from "../../types";
import { TBurgerIngredientsActions } from "../actions/ingredients";
import { INGREDIENTS_TYPES } from "../../utils/constants";

type TBurgerIngredientsState = {
  ingredients: TIngredient[];
  ingredientsLoading: boolean;
  ingredientsFailed: boolean;
  currentTab: string;
};

export const initialState: TBurgerIngredientsState = {
  ingredients: [],
  ingredientsLoading: false,
  ingredientsFailed: false,
  currentTab: INGREDIENTS_TYPES.BUN.type,
};

export const ingridientsReducer = (
  state = initialState,
  action: TBurgerIngredientsActions
) => {
  switch (action.type) {
    case INGREDIENTS_GET_REQUEST:
      return {
        ...state,
        ingredientsLoading: true,
      };
    case INGREDIENTS_GET_SUCCESS:
      return {
        ...state,
        ingredients: action.ingredients,
        ingredientsLoading: false,
        ingredientsFailed: false,
      };
    case INGREDIENTS_GET_FAILED:
      return {
        ...state,
        ingredients: [],
        ingredientsLoading: false,
        ingredientsFailed: true,
      };
    case CHANGE_BUNS:
      return {
        ...state,
        ingredients: state.ingredients.map((ingredient) => {
          if (ingredient.type === INGREDIENTS_TYPES.BUN.type) {
            return {
              ...ingredient,
              count: ingredient._id === action._id ? 2 : 0,
            };
          }
          return ingredient;
        }),
      };
    case INCREASE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.map((ingredient) => {
          if (ingredient._id === action._id) {
            return ingredient.count > 0
              ? { ...ingredient, count: ingredient.count + 1 }
              : { ...ingredient, count: 1 };
          }
          return ingredient;
        }),
      };
    case DECREASE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.map((ingredient) => {
          if (ingredient._id === action._id && ingredient.count > 0) {
            return { ...ingredient, count: ingredient.count - 1 };
          }
          return ingredient;
        }),
      };
    case RESET_COUNT_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.map((ingredient) => {
          return { ...ingredient, count: 0 };
        }),
      };
    case TAB_SWITCH: {
      return {
        ...state,
        currentTab: action.currentTab,
      };
    }
    default: {
      return state;
    }
  }
};
