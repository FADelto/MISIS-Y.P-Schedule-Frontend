import React from 'react';
import NewsItem from '../NewsItem/NewsItem';
import style from './NewsList.module.css';

const NewsList = ({news}) => {

  return (
    <div className={style.list}>
      {
        news.map(item => <NewsItem key={item.id} post={{date: item.createdAt, text: item.content, links: item.newsLinksList}} />)
      }
    </div>
  )
}

export default NewsList;