import React from 'react';
import styles from './NewsItem.module.css';

const NewsItem = ({date, content}) => {
  console.log(date);

  let newsDate = new Date(date.toLocaleString());
  console.log(newsDate);

  let text = content.replaceAll('"', '').replaceAll('\\n', 'newLine').replaceAll('\\r', '').split('newLine');
  
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
  console.log(minutes);
  
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

let message = showMessageDateTime(newsDate);

  return (
    <div>
      <div style={{textAlign: 'center', paddingTop: '20px', color: '#BBB'}}>
        {message}
      </div> 
      <div className={styles.NewsItem}>
        {text.map((p) => <div key={p.index} className={styles.p}>{p}</div>)}
      </div>   
    </div>
  )
}

export default NewsItem;