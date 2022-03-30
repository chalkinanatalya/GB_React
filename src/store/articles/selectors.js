export function selectArticles(state) {
  return state.articles.articles;
}

export function selectError(state) {
  return state.articles.error;
}

export function selectLoading(state) {
  return state.articles.loading;
}
