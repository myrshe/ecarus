import BannerSlider from "./BannerSlider/index.tsx";
import CardsSection from "./CardsSection/index.tsx";
import styles from "./index.module.scss";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <BannerSlider />
      <CardsSection />
    </div>
  );
};

export default HomePage; 