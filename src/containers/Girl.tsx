import Girl from '../components/Girl';
import { connect, Dispatch } from 'react-redux';
import {
  StoreStateType,
  AgeActionType,
  incrementAge,
  decrementAge
} from '../redux/modules/Girl';

export const mapStateToProps: Function = (state: StoreStateType) => ({
  name: state.name,
  age: state.age,
});

export const mapDispatchToProps: Function = (dispatch: Dispatch<AgeActionType>) => ({
  onIncrement: () => dispatch(incrementAge()),
  onDecrement: () => dispatch(decrementAge())
});

export default connect(mapStateToProps, mapDispatchToProps)(Girl);
