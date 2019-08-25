import Girl from '../components/Girl';
import { AgeActionType, incrementAge, decrementAge } from '../actions/';
import { StoreStateType } from '../types/index';
import { connect, Dispatch } from 'react-redux';

export const mapStateToProps: Function = ({ age, name }: StoreStateType) => ({
  age,
  name
});

export const mapDispatchToProps: Function = (dispatch: Dispatch<AgeActionType>) => ({
  onIncrement: () => dispatch(incrementAge()),
  onDecrement: () => dispatch(decrementAge())
});

export default connect(mapStateToProps, mapDispatchToProps)(Girl);
