import produce from 'immer';
import shortId from 'shortid';

const initialState = {
  categories: [],
  categoryLoading: false,
  categoryComplete: false,
  categoryError: false,
};

export const getDummyCategory = (number) => Array(number).fill().map(() => ({
  id: shortId.generate(),
  name: 'IT',
  Child: {
    id: shortId.generate(),
    name: 'Javascript',
    Child: {},
  },
}));

export const CATEGORY_REQUEST = 'CATEGORY_REQUEST';
export const CATEGORY_SUCCESS = 'CATEGORY_SUCCESS';
export const CATEGORY_FAILURE = 'CATEGORY_FAILURE';

const reducer = (state = initialState, action) => (
  produce(state, (draft) => {
    switch (action.type) {
      case CATEGORY_REQUEST:
        draft.categoryLoading = true;
        break;
      case CATEGORY_SUCCESS:
        draft.categoryLoading = false;
        draft.categoryComplete = true;
        draft.categories.unshift(getDummyCategory(2));
        break;
      case CATEGORY_FAILURE:
        draft.categoryLoading = false;
        draft.categoryError = true;
        break;
      default:
        break;
    }
  })
);

export default reducer;