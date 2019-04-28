class ArticlesController < ApplicationController

  require 'open-uri'

  URL1 = "https://newsapi.org/v2/top-headlines?country=us&category="
  URL2 = "&pageSize=21&apiKey="

  KEY = Rails.application.credentials.apikeys[:news_api_key]

  # fetching articles from the newsApi based on category
  def get_articles
    fetch(URL1 + params[:category] + URL2 + KEY) 
  end

  def create
    @article = Article.find_or_create_by(title: params[:article][:title]) do |article|
      article.author = params[:article][:author] 
      article.description = params[:article][:description]
      article.url = params[:article][:url]
      article.image = params[:article][:urlToImage]
      article.date = params[:article][:publishedAt]
      article.likes = 0
      article.dislikes = 0
    end
  
    update_likes
  end 

  def get_data
    @article = Article.find_by(title: params[:article][:title])
    if @article
      like_obj = { likes: @article.likes, dislikes: @article.dislikes }
    else
      like_obj = { likes: 0, dislikes: 0 }
    end
    render json: like_obj
  end

  def get_trending
    @likes = Article.all.max_by(10){|a| (a.likes) }
    @dislikes = Article.all.max_by(10){|a| (a.dislikes) }
    @controversial = Article.all.max_by(10){|a| (a.likes + a.dislikes) }
    
    render json: {likes: @likes, dislikes: @dislikes, controversial: @controversial}
  end

  private

  # helper function for get_articles that utilizes the open_uri library 
  def fetch(url)
    req = open(url)
    body = req.read
    render json: body 
  end

  # helper function for create that updates the likes/dislikes count based on user input
  def update_likes
    if params[:user_act] == 'like' 
      @article.likes += 1
    elsif params[:user_act] == 'dislike'
      @article.dislikes += 1
    end
    @article.save
  end
end
