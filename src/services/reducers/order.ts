import {
    OPEN_ORDER_MODAL,
    CLOSE_ORDER_MODAL,
    ORDER_POST_REQUEST,
    ORDER_POST_SUCCESS,
    ORDER_POST_FAILED
} from '../constants';
import { TOrderDetailsActions } from '../actions/order';

type TOrderState = {
    order: string | null;
    isLoading: boolean;
    error: boolean;
    modalIsActive: boolean;
}

const initialState: TOrderState = {
    modalIsActive: false,
    error: false,
    isLoading: false,
    order: null
}


export const orderReducer = (state = initialState, action: TOrderDetailsActions) => {
    switch(action.type) {
        case ORDER_POST_REQUEST: 
            return {
                ...state,
                isLoading: true
            }
        case ORDER_POST_SUCCESS: 
            return {
                ...state,
                order: action.order,
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