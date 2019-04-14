Rails.application.routes.draw do

  get '/articles/:category', to: 'articles#get_fetch'

end

