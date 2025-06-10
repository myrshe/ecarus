import styles from "../../index.module.scss";
import coins from '@/assets/images/icon/coins.svg'
import { useUser } from '@/shared/context/UserContext';

export const HistoryTab = () => {
    const { user } = useUser();
    if (!user) return null;
    return (
        <div className={styles.tabContent}>
            {user.history.map((item, i) => (
                <div className={styles.historyCard} key={i}>
                    <div>
                        <div className={styles.historyAddress}>Адрес</div>
                        <div>{item.address}</div>
                        <div className={styles.historyMaterial}>Материал</div>
                        <div>{item.material}</div>
                        <div className={styles.historyDate}>Дата</div>
                        <div>{item.date}</div>
                    </div>
                    <div className={styles.historyCoins}>
                        <span className={styles.coinsIcon}>
                            <img src={coins} alt="coins"/>
                        </span>
                        {item.coins}
                    </div>
                </div>
            ))}
        </div>
    );
}

