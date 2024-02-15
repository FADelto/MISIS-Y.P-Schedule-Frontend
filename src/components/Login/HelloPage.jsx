import React from 'react';
import styles from './HelloPage.module.css';

const HelloPage = ({ login }) => {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.welcomeText}>
        <div className={styles.headerText}>            
        <span className={styles.header}>Добро</span>
                    <span className={styles.header}>пожаловать</span>
        </div>
        <div className={styles.hintText}>            
            <span className={styles.hint}>Войдите для сохранения</span>
                    <span className={styles.hint}>прогресса задач</span>
        </div>
                </div>
            
                <div className={styles.buttonContainer}>
                    <button className={styles.authenticateBut}>Продолжить с авторизацией</button>
                    <button className={styles.fakeAuthBut} onClick={login}>Продолжить без авторизации</button>
                </div>
            </div>
        </>
    )
}

export default HelloPage;
