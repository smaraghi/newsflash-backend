class ArticlesController < ApplicationController
  
  
  require 'open-uri'

  URL1 = "https://newsapi.org/v2/top-headlines?country=us&category="
  URL2 = "&pageSize=21&apiKey="

  KEY = Rails.application.credentials.apikeys[:news_api_key]

  def get_fetch()
    fetch(URL1 + params[:category] + URL2 + KEY) 
  end

  def create
    @article = Article.find_or_create_by(title: params[:article][:title]) do |article|
      article.author = params[:article][:author] 
      article.description = params[:article][:description]
      article.url = params[:article][:url]
      article.image = params[:article][:urlToImage]
      article.date = params[:article][:publishedAt]
      article.likes = params[:likes]
      article.dislikes = 0
    end
    render json: @article 
  end 

  private

  def fetch(url)
    req = open(url)
    body = req.read
    render json: body 
  end
end
