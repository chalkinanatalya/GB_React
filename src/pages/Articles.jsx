import CircularProgress from "@mui/material/CircularProgress";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectArticles,
  selectError,
  selectLoading,
} from "../store/articles/selectors";
import { getArticlesThunk } from "./../store/articles/actions";

export const Articles = () => {
  const dispatch = useDispatch();
  const articles = useSelector(selectArticles);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const getFetchArticles = async () => {
    dispatch(getArticlesThunk());
  };

  useEffect(() => {
    getFetchArticles();
  }, []);
  return (
    <>
      <h2>Articles</h2>
      {error && <p>Something went wrong! We're already working on it!</p>}
      {loading && <CircularProgress />}
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
      <button onClick={getFetchArticles}>Reload</button>
    </>
  );
};
