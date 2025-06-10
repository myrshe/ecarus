import ecoMarketImg from '@/assets/images/photo/ecoMarket.png';
import styles from './index.module.scss';

export const EcoMarketPage = () => (
  <div className={styles.container}>
    <h1>ЭкоМаркет</h1>
    <img src={ecoMarketImg} alt="ЭкоМаркет" className={styles.img} />
    <p className={styles.p}>здесь должна быть информация о товарах</p>
  </div>
);

