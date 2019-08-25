
import * as constants from '../constants';

export interface IncrementAgeType {
  type: constants.INCREMENT_AGE_TYPE;
}

export interface DecrementAgeType {
  type: constants.DECREMENT_AGE_TYPE;
}

export type AgeActionType = IncrementAgeType | DecrementAgeType;

export const incrementAge: Function = (): IncrementAgeType => ({
  type: constants.INCREMENT_AGE
});

export const decrementAge: Function = (): DecrementAgeType => ({
  type: constants.DECREMENT_AGE
});
