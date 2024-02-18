import React from 'react'
import logo from '../../assets/images/misis-logo.svg'
import styles from "./notfound.module.css"

export default function PageNotFound() {
    return (
        <div className={styles.container}>
            <img src={logo} alt='logo' />
            <span className={styles.text}>Страница не найдена</span>
        </div>
    )
}
