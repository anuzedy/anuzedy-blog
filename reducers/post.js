import produce from 'immer';
import shortId from 'shortid';

const initialState = {
  Posts: [{
    id: shortId.generate(),
    title: '첫번째 타이틀',
    content: '첫번째 내용',
    Comments: [{
      id: '더미아이디',
      content: '댓글내용',
    }, {
      id: '더미아이디2',
      content: '댓글내용2',
    }],
  }, {
    id: shortId.generate(),
    title: '두번째 타이틀',
    content: '두번째 내용',
    Comments: [{
      id: '더미아이디3',
      content: '댓글내용3',
    }, {
      id: '더미아이디4',
      content: '댓글내용4',
    }],
  }],
  postLoading: false,
  postComplete: false,
  postError: false,
  postGetLoading: false,
  postGetComplete: false,
  postGetError: false,
  commentLoading: false,
  commentComplete: false,
  commentError: false,
};

export const POST_REQUEST = 'POST_REQUEST';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILURE = 'POST_FAILURE';

export const POST_GET_REQUEST = 'POST_REQUEST';
export const POST_GET_SUCCESS = 'POST_SUCCESS';
export const POST_GET_FAILURE = 'POST_FAILURE';

export const COMMENT_REQUEST = 'COMMENT_REQUEST';
export const COMMENT_SUCCESS = 'COMMENT_SUCCESS';
export const COMMENT_FAILURE = 'COMMENT_FAILURE';

export const postRequest = (data) => ({
  type: POST_REQUEST,
  data,
});

export const postGetRequest = (data) => ({
  type: POST_GET_REQUEST,
  data,
});

export const commentRequest = (data) => ({
  type: COMMENT_REQUEST,
  data,
});

const reducer = (state = initialState, action) => (
  produce(state, (draft) => {
    switch (action.type) {
      case POST_REQUEST:
        draft.postLoading = true;
        break;
      case POST_SUCCESS:
        draft.postLoading = false;
        draft.postComplete = true;
        draft.Posts = action.data;
        break;
      case POST_FAILURE:
        draft.postLoading = false;
        draft.postError = true;
        break;
      case POST_GET_REQUEST:
        draft.postGetLoading = true;
        break;
      case POST_GET_SUCCESS:
        draft.postGetLoading = false;
        draft.postGetComplete = true;
        draft.Posts = action.data;
        break;
      case POST_GET_FAILURE:
        draft.postGetLoading = false;
        draft.postGetError = true;
        break;
      case COMMENT_REQUEST:
        draft.commentLoading = true;
        break;
      case COMMENT_SUCCESS:
        draft.commentLoading = false;
        draft.commentComplete = true;
        draft.Posts.filter((v) => v.id
          === action.data.postId).Comments = draft.Posts.filter((v) => v.id === action.data.postId)
          .Comments.concat(action.data.comment);
        break;
      case COMMENT_FAILURE:
        draft.commentLoading = false;
        draft.commentError = true;
        break;
      default:
        break;
    }
  })
);

export default reducer;
