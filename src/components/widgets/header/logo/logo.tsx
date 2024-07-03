import React from 'react';

import PortfolioPhoto from '@assets/portfolio-photo.webp';

import styles from './logo.module.scss';
import { useNavigate } from 'react-router-dom';

interface IProps {
  isModal?: boolean;
  isShort?: boolean;
}

export const Logo: React.FC<IProps> = ({ isModal = false, isShort = false }) => {
  const navigate = useNavigate();

  const redictToMain = () => navigate('/');

  return (
    <div className={isShort ? styles.shortLogo : styles.logo} onClick={redictToMain}>
      <img className={styles.img} src={PortfolioPhoto} alt='Фотография' />
      <div>
        <p className={styles.name}>Екатерина Черкасова</p>
        <p
          className={
            isModal ? `${styles.job} ${styles.active}` : isShort ? styles.shortJob : styles.job
          }
        >
          Product designer
        </p>
      </div>
    </div>
  );
};
