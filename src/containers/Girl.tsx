import Girl from '../components/Girl';
import { AppState } from '../redux/create';
import { connect, Dispatch } from 'react-redux';
import {
  AgeActionType,
  incrementAge,
  decrementAge
} from '../redux/modules/Girl';

export const mapStateToProps: Function = (state: AppState) => ({
  name: state.girl.name,
  age: state.girl.age
});

export const mapDispatchToProps: Function = (dispatch: Dispatch<AgeActionType>) => ({
  onIncrement: () => dispatch(incrementAge()),
  onDecrement: () => dispatch(decrementAge())
});

export default connect(mapStateToProps, mapDispatchToProps)(Girl);
