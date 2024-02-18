import React, { useEffect, useState } from 'react'
import logo from "../../../assets/images/misis-logo.svg"
import hidePassIcon from "../../../assets/images/hidePassIcon.svg"
import styles from './forgotpass.module.css'

export default function ForgotPass() {
    const [showPass, setShowPass] = useState(false);
    const [email, setEmail] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(document.location.search);
        console.log(params);
        if (!!params.get('email')) setEmail(params.get('email'));
    })

    return (
        <div className={styles.forgotPassCont}>
            <div className={styles.header}>
                <img src={logo} alt="logo" />
                <span>Восстановление пароля</span>
            </div>
            <div className={styles.formContainer}>
                <div className={styles.getCodeCont}>
                    <input defaultValue={email} placeholder='Email' className={`${styles.input} ${styles.email}`}></input>
                    <button className={styles.sendCode}>Отправить код</button>
                </div>
                <input placeholder='Код с почты' className={`${styles.input} ${styles.code}`}></input>
                <div className={styles.passCont}>
                    <input type={showPass ? 'text' : 'password'} placeholder='Пароль' className={`${styles.input} ${styles.pass}`}></input>
                    <img onClick={() => setShowPass(!showPass)} className={styles.hidePassBut} src={hidePassIcon} alt="logo" />
                </div>
                <button className={styles.submit}>Сменить пароль</button>
            </div>
        </div>
    )
}
