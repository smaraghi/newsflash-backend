Rails.application.routes.draw do

  resources :articles, only: [:create, :update]
  get '/articles/:category', to: 'articles#get_fetch'
  post '/articles/get_likes', to: 'articles#get_likes'
  
end

