import { Reducer } from "redux";
import { AgeActionType } from '../actions';
import { StoreStateType } from '../types/index';
import { INCREMENT_AGE, DECREMENT_AGE } from '../constants/index';

export const AgeReducer: Reducer = (
  state: StoreStateType, action: AgeActionType
): StoreStateType => {
  const type = action.type;
  if (type === INCREMENT_AGE) {
    state = { ...state, age: state.age + 1 };
  } else if (type === DECREMENT_AGE) {
    state = { ...state, age: Math.max(1, state.age - 1) };
  }
  return state;
}
