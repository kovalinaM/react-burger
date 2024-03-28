import {getIngredients} from "../../utils/api";

export const INGREDIENTS_GET_REQUEST = 'INGREDIENTS_GET_REQUEST';
export const INGREDIENTS_GET_SUCCESS = 'INGREDIENTS_GET_SUCCESS';
export const INGREDIENTS_GET_FAILED = 'INGREDIENTS_GET_FAILED';

export const INCREASE_INGREDIENT = 'INCREASE_INGREDIENT';
export const DECREASE_INGREDIENT = 'DECREASE_INGREDIENT';
export const RESET_COUNT_INGREDIENT = 'RESET_COUNT_INGREDIENT';

export const CHANGE_BUNS = 'CHANGE_BUNS';

export const TAB_SWITCH = 'TAB_SWITCH';

export function getIngredientsList() {
    return function(dispatch) {
        dispatch({
            type: INGREDIENTS_GET_REQUEST,
        });
        getIngredients().then(res => {
            if(res && res.success) {
                dispatch({
                    type: INGREDIENTS_GET_SUCCESS,
                    ingredients: res.data,
                })
            } else {
                dispatch({
                    type: INGREDIENTS_GET_FAILED,
                })
            }
        }).catch(err => {
            dispatch({
                type: INGREDIENTS_GET_FAILED,
            })
        })
    }
}