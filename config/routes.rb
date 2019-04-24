Rails.application.routes.draw do

  resources :articles, only: [:create]
  get '/articles/get_trending', to: 'articles#get_trending'
  get '/articles/:category', to: 'articles#get_fetch'
  post '/articles/get_likes', to: 'articles#get_likes'
  
end

