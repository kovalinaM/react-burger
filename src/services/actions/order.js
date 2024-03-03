import {postOrder} from '../../utils/api'

export const OPEN_ORDER_MODAL = 'OPEN_ORDER_MODAL';
export const CLOSE_ORDER_MODAL = 'CLOSE_ORDER_MODAL';

export const ORDER_POST_REQUEST = 'ORDER_POST_REQUEST';
export const ORDER_POST_SUCCESS = 'ORDER_POST_SUCCESS';
export const ORDER_POST_FAILED = 'ORDER_POST_FAILED';

export const createOrder = (ingredients) => (dispatch) => {
    dispatch({type: ORDER_POST_REQUEST})
    return postOrder(ingredients) 
        .then(res => {
            return dispatch({type: ORDER_POST_SUCCESS, payload: res})
        })
        .catch(err => {
            return dispatch({type: ORDER_POST_FAILED})
        })
}