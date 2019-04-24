import { combineReducers } from 'redux'

const loadingReducer = (state = false, action) => {
  switch(action.type){
    case 'LOADING_ARTICLES':
      return true
    case 'FETCHED_ARTICLES':
      return false
    default:
      return state
  }
}

const articlesReducer = (state = [], action) => {
  
  switch(action.type) {
    
    case 'FETCHED_ARTICLES':
      return action.articles.articles

    default:
      return state
  }
}

const articleLikesReducer = (state = 0, action) => {
  switch(action.type){

    case 'FETCHED_ARTICLE_LIKES':
      return action.payload

    case 'INCREASE_LIKES':
      return action.payload

    default:
    return state
  }
}

const articleDislikeReducer = (state = 0, action) => {
  switch(action.type){

    case 'FETCHED_ARTICLE_DISLIKES':
      return action.payload

    case 'INCREASE_DISLIKES':
      return action.payload

    default:
      return state
  }
}

const trendingArticlesReducer = (state = {
  likes: [],
  dislikes: [],
  controversial: []
}, action) => {
  
  switch(action.type){
    case 'FETCHED_TRENDING_ARTICLES':
      return action.payload

    default:
      return state
  }
}

const activeItemReducer = (state = 'likes', action) => {

  switch(action.type){
    case 'SET_ACTIVE_ITEM':
      return action.payload

    default:
      return state
  }
}

const rootReducer = combineReducers({
  articles: articlesReducer,
  loading: loadingReducer,
  articleLikes: articleLikesReducer,
  articleDislikes: articleDislikeReducer,
  trendingArticles: trendingArticlesReducer,
  activeItem: activeItemReducer
})

export default rootReducer