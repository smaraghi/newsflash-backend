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

// This function serves as a helper method to update likes and dislikes count in the backend 
function updateArticleData(article, act){
  fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', Accept: 'application/json'
    },
    body: JSON.stringify({
      article,
      act: act
    })
  })
}

// This function serves as a helper method to return the current likes and dislikes of the article being viewed 
function getArticleData(article){
  return fetch(URL + 'get_likes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', Accept: 'application/json'
    },
    body: JSON.stringify({
      article: article
    })
  }).then(res => res.json())
}

function likeArticle(article, likes){
  updateArticleData(article, 'like')
  return { type: 'INCREASE_LIKES', payload: likes + 1  }
  }

function fetchingArticleLikes(article){
  return (dispatch) => {
    getArticleData(article)
    .then(likeData => dispatch(fetchedArticleLikes(likeData))
    )
  }
} 

function fetchedArticleLikes(likeData){
  return { type: 'FETCHED_ARTICLE_LIKES', payload: likeData.likes }
}

function dislikeArticle(article, dislikes){
  updateArticleData(article, 'dislike')
  return { type: 'INCREASE_DISLIKES', payload: dislikes + 1  }
}

function fetchedArticleDislikes(likeData){
  return { type: 'FETCHED_ARTICLE_DISLIKES', payload: likeData.dislikes }
}

function fetchingArticleDislikes(article){
  return (dispatch) => {
    getArticleData(article)
    .then(likeData => dispatch(fetchedArticleDislikes(likeData))
    )
  }
} 


export {fetchingArticles, loadingArticle, likeArticle, fetchingArticleLikes, dislikeArticle, fetchingArticleDislikes}