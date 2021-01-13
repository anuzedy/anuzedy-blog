import produce from 'immer';

const initialState = {
  id: '',
  User: {
    id: '',
    nickname: '',
    thumbnail: '',
  },
  Posts: [],
  loginLoading: false,
  loginComplete: false,
  loginError: false,
};

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginRequest = (data) => ({
  type: LOGIN_REQUEST,
  data,
});

const reducer = (state = initialState, action) => (
  produce(state, (draft) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        draft.loginLoading = true;
        break;
      case LOGIN_SUCCESS:
        draft.loginLoading = false;
        draft.loginComplete = true;
        draft.id = action.data.id;
        draft.User = action.data.User;
        break;
      case LOGIN_FAILURE:
        draft.loginLoading = false;
        draft.loginError = true;
        break;
      default:
        break;
    }
  })
);

export default reducer;
