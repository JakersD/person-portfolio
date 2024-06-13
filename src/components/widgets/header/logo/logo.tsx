import React from 'react';

import PortfolioPhoto from '@assets/portfolio-photo.jpg';

import styles from './logo.module.scss';

interface IProps {
  isModal?: boolean;
  isShort?: boolean;
}

export const Logo: React.FC<IProps> = ({ isModal = false, isShort = false }) => {
  return (
    <div className={isShort ? styles.shortLogo : styles.logo}>
      <img className={styles.img} src={PortfolioPhoto} alt='Фотография' />
      <div>
        <p className={styles.name}>Екатерина Черкасова</p>
        <p className={isModal ? `${styles.job} ${styles.active}` : isShort ? styles.shortJob : styles.job}>
          Product designer
        </p>
      </div>
    </div>
  );
};
