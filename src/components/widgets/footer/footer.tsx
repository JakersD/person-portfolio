import React from 'react';

import PortfolioPhoto from '@assets/portfolio-photo.jpg';
import NavigationIcon from '@assets/icons/navigation.svg';
import { ETitleSize, Text, Title, Wrapper } from '@components/shared';

import styles from './footer.module.scss';
import { Link } from 'react-router-dom';
import { ELinks } from '@data/config/links';

export const Footer: React.FC = () => {
  return (
    <footer id='contacts'>
      <Wrapper className={styles.main}>
        <div className={styles.imgWrapper}>
          <img className={styles.portfolioPhoto} src={PortfolioPhoto} alt='Фото портфолио' />
        </div>
        <div>
          <Title className={styles.title} size={ETitleSize.H2}>
            В данный момент активно ищу работу и открыта к новым предложениям
          </Title>
          <a className={styles.link} href={ELinks.MAIL}>
            <Title className={styles.linkTitle} size={ETitleSize.H2}>
              kolyada.0504@gmail.com
            </Title>
            <img src={NavigationIcon} alt='Ссылка на почту' />
          </a>

          <ul className={styles.list}>
            <li className={styles.item}>
              <Link className={styles.itemLink} to={ELinks.CV} target='_blank'>
                Download CV
              </Link>
            </li>
            <li>
              <Link className={styles.itemLink} to={ELinks.TELEGRAM} target='_blank'>
                Telegram
              </Link>
            </li>
            <li>
              <Link className={styles.itemLink} to={ELinks.WHATS_APP} target='_blank'>
                WhatsApp
              </Link>
            </li>
            <li>
              <Link className={styles.itemLink} to={ELinks.BEHANCE} target='_blank'>
                Behance
              </Link>
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
