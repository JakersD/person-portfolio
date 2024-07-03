import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import maximizeIcon from '@assets/icons/maximize.svg';

import styles from './index.module.scss';
import { IconButton } from '@components/shared';
import { useModal, useResize } from '@data/hooks';
import { Modal } from './modal';
import { getUniqueKey } from '@data/utils/core';
import { EScreenSize } from '@data/hooks/useResize';

interface IProps {
  images: string[];
}

export const ZoomImg: React.FC<IProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [isOpen, toggleModal] = useModal();
  const screenSize = useResize();

  return (
    <>
      <div className={styles.zoom}>
        <IconButton className={styles.icon} icon={maximizeIcon} onClick={toggleModal} />

        {images.length === 1 ? (
          <img className={styles.img} src={images[0]} alt='Картинка' />
        ) : (
          <Swiper
            wrapperClass={styles.swiperWrapper}
            modules={[Navigation, Pagination]}
            onRealIndexChange={(element) => setActiveIndex(element.activeIndex)}
            pagination={{
              el: `.${styles.dots}`,
              clickable: true,
              clickableClass: styles.swiperPagination,
              bulletClass: styles.swiperBullet,
              bulletActiveClass: styles.swiperBulletActive,
            }}
            spaceBetween={24}
            grabCursor
          >
            {images.map((img, i) => (
              <SwiperSlide key={getUniqueKey(img, i)}>
                <img className={styles.img} src={img} alt='Картинка' />
              </SwiperSlide>
            ))}
            <div className={styles.dots} />
          </Swiper>
        )}
      </div>
      <Modal
        isOpen={isOpen}
        toggleModal={toggleModal}
        images={images}
        activeIndex={activeIndex}
        isMobile={screenSize !== EScreenSize.FULL && screenSize !== EScreenSize.LG}
      />
    </>
  );
};
