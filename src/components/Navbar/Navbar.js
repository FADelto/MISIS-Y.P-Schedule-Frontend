import React, { useState } from 'react';
import styles from './navbar.module.css';
import { ScheduleOutlined, UnorderedListOutlined, BellOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, ConfigProvider } from 'antd';

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState('Расписание');
  
  return (
    <ConfigProvider
    theme={{
      components: {
        Button: {
          borderRadius: '15px',
          colorPrimary: "#009FDF",
          colorLink: '#009FDF',
          borderColorDisabled: 'transparent',
          colorTextDisabled: '#009FDF',
          colorBgContainerDisabled: 'rgba(0, 159, 223, 0.15)',
        }
      },
    }}>``
      <div class={styles.navbar}>
        <Button className={styles.button}
                icon={<ScheduleOutlined />}
                disabled={currentPage === 'Расписание' ? true : false}
                type={currentPage === 'Расписание' ? 'primary' : 'link'}
                onClick={() => {setCurrentPage('Расписание')}}>
                  {currentPage === 'Расписание' ? currentPage : ''}
        </Button>
        <Button className={styles.button}
                icon={<UnorderedListOutlined />}
                disabled={currentPage === 'Задачи' ? true : false}
                type={currentPage === 'Задачи' ? 'primary' : 'link'}
                onClick={() => {setCurrentPage('Задачи')}}>
                  {currentPage === 'Задачи' ? currentPage : ''}
        </Button>
        <Button className={styles.button}
                icon={<BellOutlined />}
                disabled={currentPage === 'Новости' ? true : false}
                type={currentPage === 'Новости' ? 'primary' : 'link'} 
                onClick={() => setCurrentPage('Новости')}>
                  {currentPage === 'Новости' ? currentPage : ''}</Button>
        <Button className={styles.button}
                icon={<SettingOutlined />}
                disabled={currentPage === 'Настройки' ? true : false}
                type={currentPage === 'Настройки' ? 'primary' : 'link'} 
                onClick={() => setCurrentPage('Настройки')}>
                  {currentPage === 'Настройки' ? currentPage : ''}
        </Button>
      </div>
    </ConfigProvider>
  )
}

export default Navbar;