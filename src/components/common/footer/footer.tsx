import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ETitleSize, MainBlock, Text, Title } from '@/components/shared';
import PortfolioPhoto from '@/../public/portfolio-photo.jpg';
import NavigationIcon from '@/../public/icons/navigation.svg';

import styles from './footer.module.scss';

export const FooterWidget: React.FC = () => {
  return (
    <footer>
      <MainBlock className={styles.main}>
        <div className={styles.imgWrapper}>
          <Image
            className={styles.portfolioPhoto}
            src={PortfolioPhoto}
            width={80}
            height={80}
            alt='Фото портфолио'
          />
        </div>
        <div>
          <Title className={styles.title} size={ETitleSize.H2}>
            В данный момент активно ищу работу и открыта к новым предложениям
          </Title>
          <Link className={styles.link} href='#'>
            <Title className={styles.linkTitle} size={ETitleSize.H2}>
              kolyada.0504@gmail.com
            </Title>
            <Image src={NavigationIcon} alt='Ссылка на почту' />
          </Link>

          <ul className={styles.list}>
            <li className={styles.item}>
              <Link className={styles.itemLink} href='#'>
                Download CV
              </Link>
            </li>
            <li>
              <Link className={styles.itemLink} href='#'>
                Telegram
              </Link>
            </li>
            <li>
              <Link className={styles.itemLink} href='#'>
                WhatsApp
              </Link>
            </li>
            <li>
              <Link className={styles.itemLink} href='#'>
                Behance
              </Link>
            </li>
          </ul>
        </div>
      </MainBlock>
      <div className={styles.footer}>
        <Text>{`© ${new Date().getFullYear()}`}</Text>
        <Text>Екатерина Черкасова</Text>
      </div>
    </footer>
  );
};
