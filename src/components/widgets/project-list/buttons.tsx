import React from 'react';

import styles from './buttons.module.scss';
import { combineStyles } from '@data/utils/core';
import { useReactiveSwiper } from '@data/hooks';

interface IProps {
  children: React.ReactNode;
}

export const SwiperButtons: React.FC<IProps> = ({ children }) => {
  const swiper = useReactiveSwiper();

  const onSwipePrev = () => swiper.slidePrev();
  const onSwipeNext = () => swiper.slideNext();

  return (
    <div className={styles.buttons}>
      <button
        className={`${
          swiper.activeIndex === 0 ? styles.prev : combineStyles([styles.prev, styles.prev_Active])
        }`}
        onClick={onSwipePrev}
      ></button>
      {children}
      <button
        className={`styles.next ${
          swiper.activeIndex === Math.floor(swiper.slides.length / 2)
            ? styles.next
            : combineStyles([styles.next, styles.next_Active])
        } `}
        onClick={onSwipeNext}
      />
    </div>
  );
};
