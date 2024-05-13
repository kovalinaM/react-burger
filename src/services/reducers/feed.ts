import {
  SELECT_ORDER,
  SET_CORRECT_ORDERS,
  UNSELECT_ORDER
} from "../constants";
import {TCorrectOrder} from "../../types";
import {TFeedActions} from "../actions/feed";

type TFeedState = {
    orders: TCorrectOrder[],
    selectedOrder: TCorrectOrder | null;
  }
  
export const initialState: TFeedState = {
    orders: [],
    selectedOrder: null,
};
  
  export const feedReducer = (state = initialState, action: TFeedActions) => {
    switch (action.type) {
      case SET_CORRECT_ORDERS: {
        return {
          ...state,
          orders: action.payload,
        };
      }

      case SELECT_ORDER: {
        return {
          ...state,
          selectedOrder: action.payload,
        };
      }
      case UNSELECT_ORDER: {
        return {
          ...state,
          selectedOrder: null,
        }
      }
      default: {
        return state;
      }
    }
  };