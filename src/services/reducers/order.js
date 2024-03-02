import {
    OPEN_ORDER_MODAL,
    CLOSE_ORDER_MODAL
} from '../actions/order'


const initialState = {
    modalIsActive: false
}


export const orderReducer = (state = initialState, action) => {
    switch(action.type) {
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