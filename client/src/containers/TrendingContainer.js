import React, { useState, useEffect } from 'react';
import Trending from '../components/Trending';
import { Item } from 'semantic-ui-react'
import TrendingMenu from '../components/TrendingMenu';

const TrendingContainer = () => {
  const [trendingArticles, setTrendingArticles] = useState(null)
  const [loading, setLoading] = useState(false)
  const [activeItem, setActiveItem] = useState('likes')

  useEffect(() => {
    setLoading(true)
    fetch('/articles/get_trending')
    .then(res => res.json())
    .then(articles => {
      setTrendingArticles(articles)
      setLoading(false)
    })
  }, [])
  

  //decides which of the 10 articles to display
  const handleActiveArticles = () => {
    let articles = []
    if (trendingArticles){
      if(activeItem === 'likes'){
        articles = trendingArticles.likes
      }
      else if(activeItem === 'dislikes'){
        articles = trendingArticles.dislikes
      }
      else {
        articles = trendingArticles.controversial
      }}
    return articles
  }
   
  return ( 
    loading ?
    <h1>loading...</h1>
    :
    <div className='trending-container'>
      <TrendingMenu />
      <Item.Group divided>
        {handleActiveArticles().map((article, index) => <Trending key={index} article={article} /> )}
      </Item.Group>
    </div>
  );
}
 


export default TrendingContainer;