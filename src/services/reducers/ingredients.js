import {
    INGREDIENTS_GET_REQUEST,
    INGREDIENTS_GET_SUCCESS,
    INGREDIENTS_GET_FAILED,
    INCREASE_INGREDIENT,
    DECREASE_INGREDIENT,
    CHANGE_BUNS,
    TAB_SWITCH,
} from "../actions/ingredients";
import {INGREDIENTS_TYPES} from "../../utils/constants"

const initialState = {
    ingredients: [],
    ingredientsLoading: false,
    ingredientsFailed: false,
    currentTab: INGREDIENTS_TYPES.BUN.type,
};

export const ingridientsReducer = (state = initialState, action) => {
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
                ingredients: [...state.ingredients].map((ingredient) => {
                    if (ingredient.type === INGREDIENTS_TYPES.BUN.type) {
                        if (ingredient._id === action._id) {
                          return { ...ingredient, count: 2 };
                        } else {
                          return { ...ingredient, count: 0 };
                        }
                      } else {
                        return ingredient;
                      }
                })
            };
        case INCREASE_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients].map((ingredient) => {
                    return ingredient._id === action._id ? {...ingredient, count: ++ingredient.count} : ingredient
                })
            }
        case DECREASE_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients].map((ingredient )=> {
                    return ingredient._id === action._id && ingredient.count > 0 ? {...ingredient, count: --ingredient.count} : ingredient;
                })
            }
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
