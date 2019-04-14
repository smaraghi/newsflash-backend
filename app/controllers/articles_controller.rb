class ArticlesController < ApplicationController
  
  require 'open-uri'

  URL1 = "https://newsapi.org/v2/top-headlines?country=us&category="
  URL2 = "&pageSize=20&apiKey="

  KEY = '023a863893ee4bc9ac6f00d655b8a102'


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
