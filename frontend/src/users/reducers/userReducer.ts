import StoreActionInterface from "../../store/definitions";
import { Action, Types, User } from "../models/userModels";

const initialState = {
  userId: 0,
  username: "",
};

export const userReducer = (
  state: User = initialState,
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
