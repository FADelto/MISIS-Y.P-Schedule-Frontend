import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './news.module.css';
import NewsList from '../NewsList/NewsList';
import { ColorRing } from 'react-loader-spinner';

const apiURL = "http://deltoserver.ddns.net:8080/api/news";

function News() {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get(apiURL).then((response) => {
        console.log(response.data)
      // let latest = response.data.reverse().slice(0, 7);
      let latest = response.data.reverse();
      setNews(latest);
      setLoading(false);
    });
    
  }, []);
  console.log(news);

  if (!news) return null;

  function Header() {
    return (
      <div className={style.header}>
            <h1 className={style.title}>Новости</h1>
            <div className={style.icon}>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.358398 8.66895C0.358398 9.79688 0.570312 10.8564 0.994141 11.8477C1.41797 12.832 2.00586 13.7002 2.75781 14.4521C3.50977 15.2041 4.37793 15.792 5.3623 16.2158C6.35352 16.6396 7.41309 16.8516 8.54102 16.8516C9.42969 16.8516 10.2773 16.7148 11.084 16.4414C11.8906 16.168 12.6289 15.792 13.2988 15.3135L18.3438 20.3687C18.4668 20.4849 18.6001 20.5703 18.7437 20.625C18.894 20.6865 19.0513 20.7173 19.2153 20.7173C19.4478 20.7173 19.6528 20.6626 19.8306 20.5532C20.0083 20.4507 20.145 20.3071 20.2407 20.1226C20.3433 19.938 20.3945 19.7329 20.3945 19.5073C20.3945 19.3433 20.3638 19.1895 20.3022 19.0459C20.2476 18.9023 20.1655 18.7759 20.0562 18.6665L15.042 13.6216C15.5684 12.938 15.9785 12.1758 16.2725 11.335C16.5732 10.4941 16.7236 9.60547 16.7236 8.66895C16.7236 7.54102 16.5117 6.48486 16.0879 5.50049C15.6641 4.50928 15.0762 3.6377 14.3242 2.88574C13.5723 2.13379 12.7007 1.5459 11.7095 1.12207C10.7251 0.698242 9.66895 0.486328 8.54102 0.486328C7.41309 0.486328 6.35352 0.698242 5.3623 1.12207C4.37793 1.5459 3.50977 2.13379 2.75781 2.88574C2.00586 3.6377 1.41797 4.50928 0.994141 5.50049C0.570312 6.48486 0.358398 7.54102 0.358398 8.66895ZM2.11182 8.66895C2.11182 7.78027 2.27588 6.94971 2.604 6.17725C2.93896 5.39795 3.40039 4.71436 3.98828 4.12646C4.58301 3.53174 5.2666 3.07031 6.03906 2.74219C6.81836 2.40723 7.65234 2.23975 8.54102 2.23975C9.42969 2.23975 10.2603 2.40723 11.0327 2.74219C11.812 3.07031 12.4956 3.53174 13.0835 4.12646C13.6714 4.71436 14.1328 5.39795 14.4678 6.17725C14.8027 6.94971 14.9702 7.78027 14.9702 8.66895C14.9702 9.55762 14.8027 10.3916 14.4678 11.1709C14.1328 11.9434 13.6714 12.6235 13.0835 13.2114C12.4956 13.7993 11.812 14.2607 11.0327 14.5957C10.2603 14.9307 9.42969 15.0981 8.54102 15.0981C7.65234 15.0981 6.81836 14.9307 6.03906 14.5957C5.2666 14.2607 4.58301 13.7993 3.98828 13.2114C3.40039 12.6235 2.93896 11.9434 2.604 11.1709C2.27588 10.3916 2.11182 9.55762 2.11182 8.66895Z" fill="#009FDF"/>
            </svg>
            </div>
          </div>
    )
  }

  return (
        <div className={style.news}>
          <Header />
          {loading 
          ? 
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <ColorRing
                  visible={true}
                  height="100"
                  width="100"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  colors={['black', 'blue', 'white', '#abbd81', '#849b87']}
            />
          </div> 
          : 
          <NewsList news={news}/>}
          
        
        </div>
    
  )
}

export default News;
