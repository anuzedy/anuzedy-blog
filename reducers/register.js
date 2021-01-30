import produce from 'immer';

const initialState = {
  email: '',
  password: '',
  registerLoading: false,
  registerComplete: false,
  registerError: false,
};

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const registerRequest = (data) => ({
  type: REGISTER_REQUEST,
  data,
});

const reducer = (state = initialState, action) => (
  produce(state, (draft) => {
    switch (action.type) {
      case REGISTER_REQUEST:
        draft.registerLoading = true;
        draft.registerComplete = false;
        break;
      case REGISTER_SUCCESS:
        draft.registerLoading = false;
        draft.registerComplete = true;
        break;
      case REGISTER_FAILURE:
        draft.registerLoading = false;
        draft.registerComplete = false;
        draft.registerError = true;
        break;
      default:
        break;
    }
  })
);

export default reducer;
