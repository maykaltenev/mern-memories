import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, FETCH_BY_SEARCH } from '../constants/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPage: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH:
      return { ...state, posts: action.payload };
    case LIKE:
      state.map((post) => (post._id === action.payload._id ? action.payload : post));
    case CREATE:
      return [...state, action.payload];
    case UPDATE:
      return state.map((post) => (post._id === action.payload._id ? action.payload : post));
    case DELETE:
      return state.filter((post) => post._id !== action.payload);
    default:
      return state;
  }
};

