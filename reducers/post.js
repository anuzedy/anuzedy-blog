import produce from 'immer';
import shortId from 'shortid';

const initialState = {
  Posts: [{
    id: shortId.generate(),
    title: '첫번째 타이틀',
    content: '첫번째 내용',
    categoryId: '2',
    Comments: [{
      id: shortId.generate(),
      userId: '더미아이디',
      userIcon: '/pngegg.png',
      content: '댓글내용',
    }, {
      id: shortId.generate(),
      userId: '더미아이디2',
      userIcon: '/pngegg.png',
      content: '댓글내용2',
    }],
  }, {
    id: shortId.generate(),
    title: '두번째 타이틀',
    content: '두번째 내용',
    categoryId: '4',
    Comments: [{
      id: shortId.generate(),
      userId: '더미아이디3',
      userIcon: '/pngegg.png',
      content: '댓글내용3',
    }, {
      id: shortId.generate(),
      userId: '더미아이디4',
      userIcon: '/pngegg.png',
      content: '댓글내용4',
    }],
  }],
  writeMode: false,
  postLoading: false,
  postComplete: false,
  postError: false,
  postWriteLoading: false,
  postWriteComplete: false,
  postWriteError: false,
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

export const POST_WRITE_REQUEST = 'POST_WRITE_REQUEST';
export const POST_WRITE_SUCCESS = 'POST_WRITE_SUCCESS';
export const POST_WRITE_FAILURE = 'POST_WRITE_FAILURE';

export const COMMENT_REQUEST = 'COMMENT_REQUEST';
export const COMMENT_SUCCESS = 'COMMENT_SUCCESS';
export const COMMENT_FAILURE = 'COMMENT_FAILURE';

export const CHANGE_WRITE_MODE = 'CHANGE_WRITE_MODE';

export const postRequest = (data) => ({
  type: POST_REQUEST,
  data,
});

export const postWriteRequest = (data) => ({
  type: POST_WRITE_REQUEST,
  data: {
    id: shortId.generate(),
    categoryId: data.categoryId,
    title: data.title,
    content: data.content,
    Comments: [],
  },
});

export const commentRequest = (data) => ({
  type: COMMENT_REQUEST,
  data: {
    ...data,
    comment: {
      ...data.comment,
      id: shortId.generate(),
      userIcon: '/pngegg.png',
    },
  },
});

export const changeWriteMode = (data) => ({
  type: CHANGE_WRITE_MODE,
  data,
});

const reducer = (state = initialState, action) => (
  produce(state, (draft) => {
    switch (action.type) {
      case POST_REQUEST:
        draft.postLoading = true;
        draft.postComplete = false;
        break;
      case POST_SUCCESS:
        draft.postLoading = false;
        draft.postComplete = true;
        draft.Posts = action.data;
        break;
      case POST_FAILURE:
        draft.postLoading = false;
        draft.postComplete = false;
        draft.postError = true;
        break;
      case POST_WRITE_REQUEST:
        draft.postWriteLoading = true;
        draft.postWriteComplete = false;
        break;
      case POST_WRITE_SUCCESS:
        draft.postWriteLoading = false;
        draft.postWriteComplete = true;
        draft.Posts.unshift(action.data);
        draft.writeMode = false;
        break;
      case POST_WRITE_FAILURE:
        draft.postWriteLoading = false;
        draft.postWriteComplete = false;
        draft.postError = true;
        break;
      case COMMENT_REQUEST:
        draft.commentLoading = true;
        draft.commentComplete = false;
        break;
      case COMMENT_SUCCESS: {
        const post = draft.Posts.find((v) => v.id === action.data.postId);
        draft.commentLoading = false;
        draft.commentComplete = true;
        post.Comments.unshift(action.data.comment);
        break;
      }
      case COMMENT_FAILURE:
        draft.commentLoading = false;
        draft.commentComplete = false;
        draft.commentError = true;
        break;
      case CHANGE_WRITE_MODE:
        draft.writeMode = action.data;
        break;
      default:
        break;
    }
  })
);

export default reducer;
