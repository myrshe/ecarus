// import {useState} from "react";
// import { Modal } from 'shared/ui/Modal';
import styles from '../index.module.scss';
import logIn from '@/assets/images/icon/Login.svg'


export const ButtonLogIn = () => {
    // const [isOpened, setIsOpened] = useState(false);

    return (
        <>
            <button onClick={() => alert('Здесь будет авторизация!')}
                    className={styles.buttonLogIn}>
                <img src={logIn} alt="icon LogIn" width={35}/>
                войти
            </button>
            {/*<button onClick={() => setIsOpened(true)} className={styles.loginButton}>
                Войти
            </button>*/}
            {/*{isOpened && <Modal onClose={() => setIsOpened(false)}>Форма входа</Modal>}*/}
        </>
    )
};