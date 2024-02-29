import {
    INGREDIENTS_GET_REQUEST,
    INGREDIENTS_GET_SUCCESS,
    INGREDIENTS_GET_FAILED,
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
