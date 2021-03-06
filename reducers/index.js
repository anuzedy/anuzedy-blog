import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import register from './register';
import login from './login';
import category from './category';
import post from './post';

const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log('HYDRATE', action);
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  register,
  login,
  category,
  post,
});

export default rootReducer;
