class ArticlesController < ApplicationController
  
  require 'open-uri'

  URL1 = "https://newsapi.org/v2/top-headlines?country=us&category="
  URL2 = "&pageSize=21&apiKey="

  KEY = Rails.application.credentials.apikeys[:news_api_key]

  def get_fetch()
    fetch(URL1 + params[:category] + URL2 + KEY) 
  end

  private

  def fetch(url)
    req = open(url)
    body = req.read
    render json: body 
  end
end
