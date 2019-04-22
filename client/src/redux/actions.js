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

function likeArticle(article, likes){
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', Accept: 'application/json'
      },
      body: JSON.stringify({
        article
      })
    })
    return { type: 'INCREASE_LIKES', payload: likes + 1  }
  }

function fetchingArticleLikes(article){
  return (dispatch) => {
    fetch(URL + 'get_likes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', Accept: 'application/json'
      },
      body: JSON.stringify({
        article: article
      })
    }).then(res => res.json())
    .then(likeData => dispatch(fetchedArticleLikes(likeData))
    )
  }
} 

function fetchedArticleLikes(likeData){
  return { type: 'FETCHED_ARTICLE_LIKES', payload: likeData.likes }
}


export {fetchingArticles, loadingArticle, likeArticle, fetchingArticleLikes}