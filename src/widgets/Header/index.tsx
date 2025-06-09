import styles from './index.module.scss';
import { LogoLink } from './components/LogoLink';
import { pages } from './constants';
import { NavLink } from './components/NavLink';
import { ButtonLogIn } from './components/ButtonLogIn';
import { useUser } from '@/shared/context/UserContext';
import { useNavigate } from 'react-router-dom';
import coinIcon from '@/assets/images/icon/coins.svg';
import locationIcon from '@/assets/images/icon/Pin.svg';

export const Header = () => {
    const { user } = useUser();
    const navigate = useNavigate();
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <LogoLink/>
                <nav className={styles.nav}>
                    {pages.map((page) => (
                        <NavLink key={page.url} url={page.url} text={page.text}/>
                    ))}
                </nav>
            </div>
            {user ? (
                <div className={styles.userInfo}>
                    <span className={styles.city}>
                        <img src={locationIcon} alt="location" className={styles.icon} />
                        Казань
                    </span>
                    <span className={styles.coins}>
                        <img src={coinIcon} alt="coins" className={styles.icon} />
                        1000
                    </span>
                    <button className={styles.profileBtn} onClick={() => navigate('/profile')}>
                        <img src={user.avatar} alt="avatar" className={styles.avatar} />
                        <span className={styles.userName}>{user.name}</span>
                    </button>
                </div>
            ) : (
                <ButtonLogIn />
            )}
        </header>
    )
}