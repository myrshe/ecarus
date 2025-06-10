import styles from "../../index.module.scss";

const promos = [
    {
        value: "1000 ₽",
        color: "#51c54b",
        date: "25.09.2021",
        link: "adidas.com/clothes/WddfJfs7dt6fsHFluj5ndfsZFu...",
        showQR: true,
    },
    {
        value: "100 ₽",
        color: "#b7b7b7",
        date: "25.09.2021",
        link: "adidas.com/clothes/WddfJfs7dt6fsHFluj5ndfsZFu...",
        showQR: false,
    },
    {
        value: "400 ₽",
        color: "#b7b7b7",
        date: "25.09.2021",
        link: "adidas.com/clothes/WddfJfs7dt6fsHFluj5ndfsZFu...",
        showQR: false,
    },
];

export const PromoTab = () => (
    <div className={styles.tabContent}>
        {promos.map((promo, i) => (
            <div className={styles.promoCard} key={i}>
                <div className={styles.promoValue} style={{ background: promo.color }}>
                    {promo.value}
                </div>
                <div>
                    <div className={styles.promoDate}>Дата создания: {promo.date}</div>
                    <div className={styles.promoLink}>
                        Ссылка на товар: <a href={`https://${promo.link}`} target="_blank" rel="noopener noreferrer">{promo.link}</a>
                    </div>
                </div>
                {promo.showQR && (
                    <button className={styles.qrBtn}>Показать qr-код</button>
                )}
            </div>
        ))}
    </div>
);

