import React from 'react';
import Image from 'next/image';

import PortfolioPhoto from '@/../public/portfolio-photo.jpg';

import styles from './logo.module.scss';

interface IProps {
  isModal?: boolean;
  isShort?: boolean;
}

export const Logo: React.FC<IProps> = ({ isModal = false, isShort = false }) => {
  return (
    <div className={isShort ? styles.shortLogo : styles.logo}>
      <Image className={styles.img} src={PortfolioPhoto} alt='Фотография' width={48} height={48} />
      <div>
        <p className={styles.name}>Екатерина Черкасова</p>
        <p className={isModal ? `${styles.job} ${styles.active}` : isShort ? styles.shortJob : styles.job}>
          Product designer
        </p>
      </div>
    </div>
  );
};
