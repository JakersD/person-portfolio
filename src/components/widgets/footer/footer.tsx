import React from 'react';

import PortfolioPhoto from '@assets/portfolio-photo.webp';
import NavigationIcon from '@assets/icons/navigation.svg';
import { ETitleSize, Text, Title, Wrapper } from '@components/shared';

import styles from './footer.module.scss';

import { ELinks } from '@data/config/links';
import { useResize } from '@data/hooks';
import { EScreenSize } from '@data/hooks/useResize';

export const Footer: React.FC = () => {
  const screenSize = useResize();

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
            <Title
              className={screenSize !== EScreenSize.SM ? styles.linkTitle : styles.linkTitleMobile}
              size={ETitleSize.H2}
            >
              kolyada.0504@gmail.com
            </Title>
            {screenSize !== EScreenSize.SM && <img src={NavigationIcon} alt='Ссылка на почту' />}
          </a>

          <ul className={styles.list}>
            <li className={styles.item}>
              <a className={styles.itemLink} href={ELinks.CV} target='_blank'>
                Download CV
              </a>
            </li>
            <li>
              <a className={styles.itemLink} href={ELinks.TELEGRAM} target='_blank'>
                Telegram
              </a>
            </li>
            <li>
              <a className={styles.itemLink} href={ELinks.WHATS_APP} target='_blank'>
                WhatsApp
              </a>
            </li>
            <li>
              <a className={styles.itemLink} href={ELinks.BEHANCE} target='_blank'>
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
