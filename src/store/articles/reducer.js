import { ERROR, LOADING, GET_ARTICLES } from "./actions";

const initialStateArticles = {
  loading: false,
  error: false,
  articles: [],
};

export const articlesReducer = (state = initialStateArticles, action) => {
  switch (action.type) {
    case LOADING: {
      return {
        ...state,
        loading: action.loading,
      };
    }
    case ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    case GET_ARTICLES: {
      return {
        ...state,
        articles: action.articles,
      };
    }
    default: {
      return state;
    }
  }
};
