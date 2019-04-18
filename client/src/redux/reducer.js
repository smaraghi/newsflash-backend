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
    
    case 'INCREASE_VOTES':
      return state.map(article => {
        if(article.id === action.articleId) {
          return{
            ...article,
            votes: article.votes + 1
          }
        } else {
          return article
        }
      })
    
    case 'DECREASE_VOTES':
      return state.map(article => {
        if(article.id === action.articleId) {
          return{
            ...article,
            votes: article.votes - 1
          }
        } else {
          return article
        }
      })

    // case 'UPDATE_ARTICLE':
    
    default:
      return state
  }
}

const rootReducer = combineReducers({
  articles: articlesReducer,
  loading: loadingReducer
})

export default rootReducer