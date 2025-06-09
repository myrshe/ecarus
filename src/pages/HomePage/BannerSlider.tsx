import React, { useState } from "react";
import bannerCleanerWorld from '@/assets/images/photo/bannerCleanerWorld.png';
import doYouKnow from '@/assets/images/photo/doYouKnow.png';
import whatsWithTheMasks from '@/assets/images/photo/whatsWithTheMasks.png';
import arrowLeft from '@/assets/images/icon/arrowLeft.svg';
import arrowRight from '@/assets/images/icon/arrowRight.svg';
import styles from './BannerSlider.module.scss';

const slides = [
  bannerCleanerWorld,
  doYouKnow,
  whatsWithTheMasks,
];

const BannerSlider = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = (index: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 400);
  };

  const prevSlide = () => goTo((current - 1 + slides.length) % slides.length);
  const nextSlide = () => goTo((current + 1) % slides.length);

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.slide}>
        <button className={styles.arrowLeft} onClick={prevSlide} aria-label="Назад">
          <img src={arrowLeft} alt="arrow left" />
        </button>
        <img
          className={styles.image}
          src={slides[current]}
          alt={`slide-${current}`}
        />
        <button className={styles.arrowRight} onClick={nextSlide} aria-label="Вперёд">
          <img src={arrowRight} alt="arrow right" />
        </button>
      </div>
    </div>
  );
};

export default BannerSlider; 