let URL = '/articles/health'

function loadingArticle(){
  return { type: 'LOADING_ARTICLES'}
}

function fetchedArticles(articles){
  return { type: 'FETCHED_ARTICLES', articles }
}

function fetchArticles(){
  return (dispatch) => {
    dispatch(loadingArticle())
    fetch(URL)
    .then(res => res.json())
    .then(articles => {
      dispatch(fetchedArticles(articles))
    })
  }
}

export {fetchArticles, loadingArticle, fetchedArticles}