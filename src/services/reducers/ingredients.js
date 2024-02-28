import {
    INGREDIENTS_GET_REQUEST,
    INGREDIENTS_GET_SUCCESS,
    INGREDIENTS_GET_FAILED,
} from "../actions/ingredients";

const initialState = {
    ingredients: [],
    ingredientsLoading: false,
    ingredientsFailed: false,
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
                ingredientsFailed: true
            };
        default: {
            return state;
        }
    }
};
