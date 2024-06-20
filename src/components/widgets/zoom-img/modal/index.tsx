import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import styles from './index.module.scss';
import { IconButton } from '@components/shared';

import closeIcon from '@assets/icons/close-icon.svg';
import { getUniqueKey } from '@data/utils/core';
import { Buttons } from './buttons';

interface IProps {
  isOpen: boolean;
  images: string[];
  activeIndex: number;
  toggleModal: () => void;
}

const portal = document.getElementById('zoom-modal');

export const Modal: React.FC<IProps> = ({ isOpen, toggleModal, images, activeIndex }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        toggleModal();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }

    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen]);

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation();

  return ReactDOM.createPortal(
    <>
      {isOpen && (
        <div className={styles.modalWrapper} onClick={toggleModal}>
          <div className={styles.wrapper} onClick={stopPropagation}>
            {images.length === 1 ? (
              <div className={styles.gallery}>
                <IconButton icon={closeIcon} className={styles.icon} onClick={toggleModal} />
                <img className={styles.image} src={images[0]} alt='Картинка' />
              </div>
            ) : (
              <div className={styles.gallery}>
                <IconButton icon={closeIcon} className={styles.icon} onClick={toggleModal} />

                <Swiper
                  modules={[Navigation]}
                  initialSlide={activeIndex}
                  navigation
                  spaceBetween={32}
                  grabCursor
                >
                  {images.map((image, i) => (
                    <SwiperSlide key={getUniqueKey(image, i)}>
                      <img className={styles.image} src={image} alt='Картинка' />
                    </SwiperSlide>
                  ))}
                  <Buttons />
                </Swiper>
              </div>
            )}
          </div>
        </div>
      )}
    </>,
    portal as HTMLElement,
  );
};
