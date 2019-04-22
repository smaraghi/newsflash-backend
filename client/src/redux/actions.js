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

function likeArticle(article){
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', Accept: 'application/json'
      },
      body: JSON.stringify({
        article,
        likes: 1
      })
    })
    return { type: 'INCREASE_LIKES', payload: { ...article, likes: article.likes + 1 } }
  }


export {fetchingArticles, loadingArticle, likeArticle}