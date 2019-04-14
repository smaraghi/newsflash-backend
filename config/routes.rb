Rails.application.routes.draw do
  
  get '/articles/tech', to: 'articles#get_tech'
  get '/articles/science', to: 'articles#get_science'
  get '/articles/entertainment', to: 'articles#get_entertainment'
  get '/articles/health', to: 'articles#get_health'
  get '/articles/business', to: 'articles#get_business'
  get '/articles/sports', to: 'articles#get_sports'
end
