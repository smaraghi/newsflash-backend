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
function saveArticleData(article, user_act){
  fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', Accept: 'application/json'
    },
    body: JSON.stringify({
      article,
      user_act: user_act
    })
  })
}

function likeArticle(article, likes){
  saveArticleData(article, 'like')
  return { type: 'INCREASE_LIKES', payload: likes + 1  }
  }

function dislikeArticle(article, dislikes){
  saveArticleData(article, 'dislike')
  return { type: 'INCREASE_DISLIKES', payload: dislikes + 1  }
}

// This function serves as a helper method to return the current likes and dislikes of the article being viewed 
function getArticleData(article){
  return fetch(URL + 'get_data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', Accept: 'application/json'
    },
    body: JSON.stringify({
      article: article
    })
  }).then(res => res.json())
}

function fetchingArticleData(article){
  return (dispatch) => {
    getArticleData(article)
    .then((data ) => dispatch(fetchedArticleData(data)))
  }
} 

function fetchedArticleData(data){
  return { type: 'FETCHED_ARTICLE_DATA', payload: data }
}

function fetchedTrendingArticles(articles){
  return { type: 'FETCHED_TRENDING_ARTICLES', payload: articles }
}

function fetchingTrendingArticles(){
  return(dispatch) => {
    fetch(URL + 'get_trending')
    .then(res => res.json())
    .then(articles => dispatch(fetchedTrendingArticles(articles)))
  }
}

function setActiveItem(item){
  return { type: 'SET_ACTIVE_ITEM', payload: item }
}

export {fetchingArticles, loadingArticle, likeArticle, fetchingArticleData, dislikeArticle,  fetchingTrendingArticles, setActiveItem}