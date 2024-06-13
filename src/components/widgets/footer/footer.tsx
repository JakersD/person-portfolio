import React from 'react';

import PortfolioPhoto from '@assets/portfolio-photo.jpg';
import NavigationIcon from '@assets/icons/navigation.svg';
import { ETitleSize, Text, Title, Wrapper } from '@components/shared';

import styles from './footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer>
      <Wrapper className={styles.main}>
        <div className={styles.imgWrapper}>
          <img className={styles.portfolioPhoto} src={PortfolioPhoto} alt='Фото портфолио' />
        </div>
        <div>
          <Title className={styles.title} size={ETitleSize.H2}>
            В данный момент активно ищу работу и открыта к новым предложениям
          </Title>
          <a className={styles.link} href='#'>
            <Title className={styles.linkTitle} size={ETitleSize.H2}>
              kolyada.0504@gmail.com
            </Title>
            <img src={NavigationIcon} alt='Ссылка на почту' />
          </a>

          <ul className={styles.list}>
            <li className={styles.item}>
              <a className={styles.itemLink} href='#'>
                Download CV
              </a>
            </li>
            <li>
              <a className={styles.itemLink} href='#'>
                Telegram
              </a>
            </li>
            <li>
              <a className={styles.itemLink} href='#'>
                WhatsApp
              </a>
            </li>
            <li>
              <a className={styles.itemLink} href='#'>
                Behance
              </a>
            </li>
          </ul>
        </div>
      </Wrapper>
      <div className={styles.footer}>
        <Text>{`© ${new Date().getFullYear()}`}</Text>
        <Text>Екатерина Черкасова</Text>
      </div>
    </footer>
  );
};
