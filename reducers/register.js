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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        registerLoading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        registerLoading: false,
        registerComplete: true,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        registerLoading: false,
        registerComplete: false,
        registerError: true,
      };
    default:
      return state;
  }
};

export default reducer;
