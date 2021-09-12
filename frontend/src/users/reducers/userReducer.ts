import StoreActionInterface from "../../store/definitions";
import { Action, Types } from "../models/userModels";

const initialState = {};

export const userReducer = (
  state = initialState,
  action: StoreActionInterface<Types, Action>
) => {
  switch (action.type) {
    case Types.LOGIN:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
