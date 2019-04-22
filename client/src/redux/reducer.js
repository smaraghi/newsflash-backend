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
      
    case 'INCREASE_LIKES':
    
      let newArticles = [ ...state ]
      const removalIndex = newArticles.findIndex(article => article.title === action.payload.title)
      newArticles.splice(removalIndex, 1, action.payload)
      return newArticles

    // case 'INCREASE_DISLIKES':
    //   return 

    default:
      return state
  }
}

const rootReducer = combineReducers({
  articles: articlesReducer,
  loading: loadingReducer
})

export default rootReducer