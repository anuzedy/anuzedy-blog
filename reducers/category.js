import produce from 'immer';
// import shortId from 'shortid';

const initialState = {
  categories: [],
  recentCategory: 0,
  categoryLoading: false,
  categoryComplete: false,
  categoryError: false,
};

export const getDummyCategory = (number) => Array(number).fill().map(() => ({
  id: 2,
  name: 'IT',
  Child: {
    id: 3,
    name: 'Javascript',
    Child: {},
  },
}));

export const ALL_POST_CATEGORY_REQUEST = 'ALL_POST_CATEGORY_REQUEST';

export const CATEGORY_REQUEST = 'CATEGORY_REQUEST';
export const CATEGORY_SUCCESS = 'CATEGORY_SUCCESS';
export const CATEGORY_FAILURE = 'CATEGORY_FAILURE';

export const allPostCategory = {
  type: ALL_POST_CATEGORY_REQUEST,
};

export const cateroryRequest = {
  type: CATEGORY_REQUEST,
};

const reducer = (state = initialState, action) => (
  produce(state, (draft) => {
    switch (action.type) {
      case ALL_POST_CATEGORY_REQUEST:
        draft.recentCategory = 0;
        break;
      case CATEGORY_REQUEST:
        draft.categoryLoading = true;
        draft.categoryComplete = false;
        break;
      case CATEGORY_SUCCESS:
        draft.categoryLoading = false;
        draft.categoryComplete = true;
        draft.categories = action.data;
        break;
      case CATEGORY_FAILURE:
        draft.categoryLoading = false;
        draft.categoryComplete = false;
        draft.categoryError = true;
        break;
      default:
        break;
    }
  })
);

export default reducer;
