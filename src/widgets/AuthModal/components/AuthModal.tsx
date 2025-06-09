import React, { useState } from "react";
import styles from "../index.module.scss";

type Props = {
    onSms: () => void;
    onPartner: () => void;
    onError: (msg: string) => void;
    onSuccess: () => void;
};

const AuthForm: React.FC<Props> = ({ onSms, onPartner, onError, onSuccess }) => {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Здесь должна быть логика авторизации
        if (phone && password) {
            onSuccess();
        } else {
            onError("Введите телефон и пароль");
        }
    };

    return (
        <>
            <h2 className={styles.title}>Вход</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Телефон"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button className={styles.greenBtn} type="submit">Войти</button>
            </form>
            <div className={styles.links}>
                <button type="button" className={styles.link} onClick={onSms}>Войти с помощью смс</button>
                <button type="button" className={styles.link} onClick={onPartner}>Вход для партнёров</button>
            </div>
        </>
    );
};

export default AuthForm;