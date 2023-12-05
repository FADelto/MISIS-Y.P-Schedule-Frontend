import React from 'react';
import styles from './NewsItem.module.css';

const NewsItem = ({ post }) => {

  let images = [];
  let files = [];

  let newsDate = new Date(post.date.toLocaleString());

  let text = post.text.replaceAll('"', '').replaceAll('\\n', 'newLine').replaceAll('\\r', '').split('newLine');

  console.log(post.links)

  if (post.links) {
    post.links.map(i => {
      if (i.newsLinksType === 'IMAGES') {
        images.push(i.newsLink)
      }
    })
  }

  if (post.links) {
    post.links.map(i => {
      if (i.newsLinksType === 'FILES') {
        files.push(i.newsLink)
      }
    })
  }

  console.log(images);
  
  let day = newsDate.getDate();
  let month = newsDate.toLocaleString('ru', { month: 'long' }).slice(0, -1) + 'я';
  let year = newsDate.getFullYear();
  let hours = newsDate.getHours();
  if (hours < 10) {
    hours = '0' + hours;
  }
  let minutes = newsDate.getMinutes();
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  
  function dropHMS(date) {
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0, 0);
  }

  function showMessageDateTime(dateTime) {
    let today = new Date(),          
    yesterday = new Date(), 
    beforeYesterday = new Date(),            
    postDate = new Date(dateTime);          

    yesterday.setDate(today.getDate() - 1);
    beforeYesterday.setDate(today.getDate() - 2)
    
    dropHMS(today);
    dropHMS(yesterday);
    dropHMS(beforeYesterday);
    dropHMS(postDate);

    if (dateTime) {
      if (today.getTime() === postDate.getTime()) {                                                                
        return 'Сегодня ' + hours + ':' + minutes;                                                                                
      } else if (yesterday.getTime() === postDate.getTime()) {                                                     
        return 'Вчера ' + hours + ':' + minutes                                                                                  
      } else if (beforeYesterday.getTime() === postDate.getTime()) {                                                     
        return 'Позавчера ' + hours + ':' + minutes;                                                                                   
      } else {                                                                                            
        return day + ' ' + month + ' ' + year + ', ' + hours + ':' + minutes + '';                                                                     
      }
    }
}

let dateTitle = showMessageDateTime(newsDate);

  return (
    <div>
      <div style={{textAlign: 'center', paddingTop: '20px', color: '#BBB'}}>
        {dateTitle}
      </div> 
      <div className={styles.NewsText}>
        {text.map((p) => <div key={p.index} className={styles.p}>{p}</div>)}
        {images ? images.map(image => <img src={`${image}`} style={{padding: '10px', width: '70%'}}/>) : ''}
      </div>   
    </div>
  )
}

export default NewsItem;