Rails.application.routes.draw do

  resources :articles, only: [:create]
  get '/articles/get_trending', to: 'articles#get_trending'
  get '/articles/:category', to: 'articles#get_articles'
  post '/articles/get_data', to: 'articles#get_data'

end

