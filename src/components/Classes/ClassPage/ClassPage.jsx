import React from 'react';
import styles from './classpage.module.css';
import leftArrow from '../../../assets/images/left-arrow-blue.svg';


export default function ClassPage({ className, classType, time, setOpenClass, setHidePagination }) {

    const backButton = () => {
        setOpenClass(false);
        setHidePagination(false);
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.header}>
                <div className={styles.backButton} onClick={backButton}>
                    <img className={styles.leftArrow} src={leftArrow} alt='back' />
                    <span>Расписание</span>
                </div>
                <div className={styles.editButton}>
                    <span>Изменить</span>
                </div>
            </div>
            <div className={styles.classBody}></div>
        </div>
    );
}
