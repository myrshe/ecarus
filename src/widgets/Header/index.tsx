import styles from './index.module.scss';
import { LogoLink } from './components/LogoLink';
import { pages } from './constants';
import { NavLink } from './components/NavLink';
import { ButtonLogIn } from './components/ButtonLogIn';

export const Header = () => {
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
            <ButtonLogIn />
        </header>
    )
}