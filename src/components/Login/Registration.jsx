import React, { useState } from 'react'
import logo from "../../assets/images/misis-logo.svg"
import styles from "./registration.module.css"
import plus from "../../assets/images/plus-sign.svg"
import hiddePassIcon from "../../assets/images/hidePassIcon.svg"
import { useFilePicker } from 'use-file-picker';
import {
    FileAmountLimitValidator,
    FileTypeValidator,
    FileSizeValidator,
    ImageDimensionsValidator,
} from 'use-file-picker/validators';

export default function Registration() {
    const [showPass, setShowPass] = useState(false);
    const { openFilePicker, filesContent, loading, errors } = useFilePicker({
        readAs: 'DataURL',
        accept: 'image/*',
        multiple: false,
        validators: [
            new FileAmountLimitValidator({ max: 1 }),
            new FileTypeValidator(['jpg', 'png']),
        ],
    });
    return (
        <div className={styles.registrationCont}>
            <div className={styles.header}>
                <img src={logo} alt="logo" />
                <span>Регистрация</span>
            </div>
            <div className={styles.formContainer}>
                <div className={styles.profilePicCont}>
                    <div onClick={() => {
                        openFilePicker();
                        console.log(filesContent);
                    }} className={styles.profPicButton}>
                        {!filesContent.length && (<img src={plus} alt="logo" />)}
                        {!!filesContent.length && (<img className={styles.profilePicImg} src={filesContent[0]?.content} alt={filesContent[0]?.name} />)}
                    </div>
                    <span>Загрузите изображение профиля</span>
                </div>
                <input placeholder='Email' className={`${styles.input} ${styles.email}`}></input>
                <div className={styles.passCont}>
                    <input type={showPass ? 'text' : 'password'} placeholder='Пароль' className={`${styles.input} ${styles.pass}`}></input>
                    <img onClick={() => setShowPass(!showPass)} className={styles.hidePassBut} src={hiddePassIcon} alt="logo" />
                </div>
                <input placeholder='Группа' className={`${styles.input} ${styles.group}`}></input>
                <input placeholder='Имя' className={`${styles.input} ${styles.name}`}></input>
                <button className={styles.register}>Зарегистрироваться</button>
                <p className={styles.signInText}>Есть аккаунт? <span className={styles.signInButton}>Войти</span></p>
            </div>
        </div>
    )
}
