import React, { useRef, useState } from 'react'
import styles from './signin.module.css'
import logo from "../../../assets/images/misis-logo.svg"
import hidePassIcon from "../../../assets/images/hidePassIcon.svg"
import leftArrow from "../../../assets/images/left-arrow.svg"
import { Navigate } from 'react-router-dom'

export default function SignIn() {
    const [showPass, setShowPass] = useState(false);
    const [goBack, setGoBack] = useState(false);
    const [signOn, setSignOn] = useState(false);
    const [forgotPass, setForgotPass] = useState(false);
    const [email, setEmail] = useState(null);

    const emailRef = useRef();

    const handleForgotPass = () => {
        if (!!emailRef.current.value) {
            setEmail(emailRef.current.value);
        }
        setForgotPass(true);
    }

    if (goBack) {
        return <Navigate to="/welcome" />
    }

    if (signOn) {
        return <Navigate to="/register" />
    }

    if (forgotPass) {
        return <Navigate to={`/password?email=${email || ''}`} />
    }

    return (
        <div className={styles.signInCont}>
            <div className={styles.header}>
                <img src={logo} alt="logo" />
                <span>Авторизация</span>
            </div>
            <div className={styles.formContainer}>
                <input ref={emailRef} placeholder='Email' className={`${styles.input} ${styles.email}`}></input>
                <div className={styles.passCont}>
                    <input type={showPass ? 'text' : 'password'} placeholder='Пароль' className={`${styles.input} ${styles.pass}`}></input>
                    <img onClick={() => setShowPass(!showPass)} className={styles.hidePassBut} src={hidePassIcon} alt="logo" />
                    <div className={styles.forgotPass} onClick={handleForgotPass}>Забыли пароль?</div>
                </div>
                <button className={styles.register}>Войти</button>
                <div className={styles.signOnText}>
                    <img onClick={() => setGoBack(true)} className={styles.leftArrow} src={leftArrow} alt='pass' />
                    <span>
                        Нет аккаунта? <span className={styles.signOnButton} onClick={() => setSignOn(true)} >Зарегистрироваться</span>
                    </span>
                </div>
            </div>
        </div>
    )
}
