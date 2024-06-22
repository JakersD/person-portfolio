import React from 'react';

import styles from './tag.module.scss';
import { Link } from 'react-router-dom';

interface IProps {
  link: string;
  icon: string;
  children: string;
  isLink?: boolean;
}

export const Tag: React.FC<IProps> = ({ icon, children, link, isLink }) => {
  if (isLink) {
    return (
      <a className={styles.tag} href={link}>
        <img className={styles.img} src={icon} alt='Иконка' />
        <p className={styles.text}>{children} </p>
      </a>
    );
  }

  return (
    <Link className={styles.tag} to={link} target='_blank'>
      <img className={styles.img} src={icon} alt='Иконка' />
      <p className={styles.text}>{children} </p>
    </Link>
  );
};
