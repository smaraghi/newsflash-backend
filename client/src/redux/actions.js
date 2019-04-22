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

function favoriteArticle(article){
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', Accept: 'application/json'
      },
      body: JSON.stringify({
        article
      })
    })
    return { type: 'FAVORITE_ARTICLE', payload: article }
  }


export {fetchingArticles, loadingArticle, favoriteArticle}