import React, { useState } from 'react';
import styles from './navbar.module.css';
import { ScheduleOutlined, UnorderedListOutlined, BellOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, ConfigProvider } from 'antd';

const Navbar = () => {

  const [currentPage, setCurrentPage] = useState('Расписание');

  return (
    <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: 'rgba(0, 159, 223, 0.15)',
        borderRadius: '15px',
        colorText: '#009FDF'
      },
    }}>
      <div class={styles.navbar}>
        <Button icon={<ScheduleOutlined />}
              type={currentPage === 'Расписание' ? 'primary' : 'text'}
              onClick={() => {setCurrentPage('Расписание')}}>{currentPage === 'Расписание' ? currentPage : ''}</Button>
        <Button icon={<UnorderedListOutlined />}
              type={currentPage === 'Задачи' ? 'primary' : 'text'}
              onClick={() => {setCurrentPage('Задачи')}}>{currentPage === 'Задачи' ? currentPage : ''}
        </Button>
        <Button icon={<BellOutlined />}
              type={currentPage === 'Новости' ? 'primary' : 'text'} 
              onClick={() => setCurrentPage('Новости')}>{currentPage === 'Новости' ? currentPage : ''}</Button>
        <Button icon={<SettingOutlined />}
              type={currentPage === 'Настройки' ? 'primary' : 'text'} 
              onClick={() => setCurrentPage('Настройки')}>{currentPage === 'Настройки' ? currentPage : ''}</Button>
      </div>
    </ConfigProvider>
  )
}

export default Navbar;