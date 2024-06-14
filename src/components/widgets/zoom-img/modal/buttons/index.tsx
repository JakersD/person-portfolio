import { useReactiveSwiper } from '@data/hooks';
import React from 'react';

import styles from './index.module.scss';
import { combineStyles } from '@data/utils/core';

export const Buttons: React.FC = () => {
  const swiper = useReactiveSwiper();

  const onSwipePrev = () => swiper.slidePrev();
  const onSwipeNext = () => swiper.slideNext();

  return (
    <>
      <button
        className={`${
          swiper.activeIndex === 0 ? styles.prev : combineStyles([styles.prev, styles.prev_Active])
        }`}
        onClick={onSwipePrev}
      />
      <button
        className={`styles.next ${
          swiper.activeIndex === swiper.slides.length - 1
            ? styles.next
            : combineStyles([styles.next, styles.next_Active])
        } `}
        onClick={onSwipeNext}
      />
    </>
  );
};
