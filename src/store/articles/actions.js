import { apiUrl } from "../../constants";

export const LOADING = "ARTICLES::LOADING";
export const ERROR = "ARTICLES::ERROR";
export const GET_ARTICLES = "ARTICLES::GET_ARTICLES";

export const getArticles = (articles) => ({
  type: GET_ARTICLES,
  articles,
});

export const fetchLoading = (loading) => ({
  type: LOADING,
  loading,
});

export const fetchError = (error) => ({
  type: ERROR,
  error,
});

export const getArticlesThunk = () => async (dispatch) => {
  dispatch(fetchLoading(true));
  dispatch(getArticles([]));
  dispatch(fetchError(false));

  try {
    const res = await fetch(apiUrl);
    if (!res.ok && res.status >= 200 && res.status < 300) {
      throw new Error("response is not ok");
    }
    const articles = await res.json();
    dispatch(getArticles(articles));
  } catch (err) {
    dispatch(fetchError(true));
  } finally {
    dispatch(fetchLoading(false));
  }
};
