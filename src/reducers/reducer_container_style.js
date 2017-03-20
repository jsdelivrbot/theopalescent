import { SET_CONTAINER_STYLE } from '../actions';

const INITIAL_STATE = {
  containerStyle: 'outer-container'
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_CONTAINER_STYLE:
      return { containerStyle: action.payload };
    default:
      return state;
  }
}
