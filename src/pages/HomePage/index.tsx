import React from "react";
import BannerSlider from "./BannerSlider";
import CardsSection from "./CardsSection";
import InfoBanners from "./InfoBanners";
import styles from "./index.module.scss";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <BannerSlider />
      <CardsSection />
      <InfoBanners />
    </div>
  );
};

export default HomePage; 