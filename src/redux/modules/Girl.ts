import { Reducer } from 'redux';

export const INCREMENT_AGE = 'INCREMENT_AGE';
export const DECREMENT_AGE = 'DECREMENT_AGE';

export type INCREMENT_AGE_TYPE = typeof INCREMENT_AGE;
export type DECREMENT_AGE_TYPE = typeof DECREMENT_AGE;

export interface IncrementAgeType {
  type: INCREMENT_AGE_TYPE;
}

export interface DecrementAgeType {
  type: DECREMENT_AGE_TYPE;
}

export type AgeActionType = IncrementAgeType | DecrementAgeType;

export const incrementAge: Function = (): IncrementAgeType => ({
  type: INCREMENT_AGE
});

export const decrementAge: Function = (): DecrementAgeType => ({
  type: DECREMENT_AGE
});

export interface StoreStateType {
  name: string;
  age: number;
}

export interface PropsType {
  name: string;
  age?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

const initialState = {
  name: 'Jane',
  age: 1,
};

export const GirlReducer: Reducer = (
  state: StoreStateType = initialState,
  action: AgeActionType
): StoreStateType => {
  const type = action.type;
  console.log(`type --> ${type}`);
  console.log(`age --> ${state.age}`);
  if (type === INCREMENT_AGE) {
    state = { ...state, age: state.age + 1 };
  } else if (type === DECREMENT_AGE) {
    state = { ...state, age: Math.max(1, state.age - 1) };
  }
  return state;
}
