import {
    OPEN_ORDER_MODAL,
    CLOSE_ORDER_MODAL,
    ORDER_POST_REQUEST,
    ORDER_POST_SUCCESS,
    ORDER_POST_FAILED
} from '../actions/order'


const initialState = {
    modalIsActive: false,
    error: false,
    isLoading: false,
    order: null
}


export const orderReducer = (state = initialState, action) => {
    switch(action.type) {
        case ORDER_POST_REQUEST: 
            return {
                ...state,
                isLoading: true
            }
        case ORDER_POST_SUCCESS: 
            return {
                ...state,
                order: action.payload,
                isLoading: false
            }
        case ORDER_POST_FAILED: 
            return {
                ...state,
                error: true,
                isLoading: false
            }
        case OPEN_ORDER_MODAL:
            return {
                ...state,
                modalIsActive: true
            }
            case CLOSE_ORDER_MODAL: 
                return {
                    ...state,
                    modalIsActive: false
                }
        default:
            return state;
    }
}