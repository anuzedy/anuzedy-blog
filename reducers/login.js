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
  logoutLoading: false,
  logoutComplete: false,
  logoutError: false,
};

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const loginRequest = (data) => ({
  type: LOGIN_REQUEST,
  data,
});

export const logoutRequest = {
  type: LOGOUT_REQUEST,
};

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
      case LOGOUT_REQUEST:
        draft.logoutLoading = true;
        break;
      case LOGOUT_SUCCESS:
        draft.logoutLoading = false;
        draft.logoutComplete = true;
        draft.id = '';
        draft.User = {};
        break;
      case LOGOUT_FAILURE:
        draft.logoutLoading = false;
        draft.logoutError = true;
        break;
      default:
        break;
    }
  })
);

export default reducer;
