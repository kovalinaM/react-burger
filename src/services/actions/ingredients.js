import {getIngredients} from "../../utils/api";

export const INGREDIENTS_GET_REQUEST = 'INGREDIENTS_GET_REQUEST';
export const INGREDIENTS_GET_SUCCESS = 'INGREDIENTS_GET_SUCCESS';
export const INGREDIENTS_GET_FAILED = 'INGREDIENTS_GET_FAILED';

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