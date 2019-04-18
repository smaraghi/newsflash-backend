let URL = '/articles/'

function loadingArticle(){
  return { type: 'LOADING_ARTICLES'}
}

function fetchedArticles(articles){
  return { type: 'FETCHED_ARTICLES', articles }
}


function fetchingArticles(category){
  return (dispatch) => {
    dispatch(loadingArticle())
    fetch(URL + category)
    .then(res => res.json())
    .then(articles => {
      dispatch(fetchedArticles(articles))
    })
  }
}

export {fetchingArticles, loadingArticle}