import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';
import containerStyleReducer from './reducer_container_style';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer,
  containerStyleReducer
});

export default rootReducer;
