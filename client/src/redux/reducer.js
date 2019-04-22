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

const favoriteArticlesReducer = (state= [], action) => {
  
  switch(action.type) {

    case 'FAVORITE_ARTICLE':
      
      return [...state, action.payload]

    default:
      return state
  }
}

const rootReducer = combineReducers({
  articles: articlesReducer,
  loading: loadingReducer,
  favoriteArticles: favoriteArticlesReducer
})

export default rootReducer