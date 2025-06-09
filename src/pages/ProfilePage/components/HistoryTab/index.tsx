import styles from "../../index.module.scss";
import coins from '@/assets/images/icon/coins.svg'

const history = [
    {
        address: "Казань, Кремлёвская, 88",
        material: "Пластик: 1 кг  •  Стекло: 2 кг  •  Бумага: 25 кг",
        date: "25.09.2021",
        coins: 1000,
    },
    {
        address: "Казань, проспект Победы, 141",
        material: "Пластик: 1 кг  •  Стекло: 3 кг  •  Бумага: 5 кг",
        date: "25.09.2021",
        coins: 900,
    },
];

const Index = () => (
    <div className={styles.tabContent}>
        {history.map((item, i) => (
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

export default Index;