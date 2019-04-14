class ArticlesController < ApplicationController

  require 'open-uri'
  KEY = '023a863893ee4bc9ac6f00d655b8a102'

  def get_tech
    url = "https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=20&apiKey=#{KEY}"
    fetch(url)
  end

  def get_science
    url = "https://newsapi.org/v2/top-headlines?country=us&category=science&pageSize=20&apiKey=#{KEY}"
    fetch(url)
  end

  def get_entertainment
    url = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&pageSize=20&apiKey=#{KEY}"
    fetch(url)
  end

  def get_health
    url = "https://newsapi.org/v2/top-headlines?country=us&category=health&pageSize=20&apiKey=#{KEY}"
    fetch(url)
  end

  def get_business
    url = "https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=20&apiKey=#{KEY}"
    fetch(url)
  end

  def get_sports
    url = "https://newsapi.org/v2/top-headlines?country=us&category=sports&pageSize=20&apiKey=#{KEY}"
    fetch(url)
  end

  private

  def fetch(url)
    req = open(url)
    body = req.read
    render json: body 
  end
end