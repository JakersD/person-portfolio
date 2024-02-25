import React from 'react';
import Image from 'next/image';

import styles from './tag.module.scss';

interface IProps {
  icon: string;
  children: string;
  onClick?: () => void;
}

export const Tag: React.FC<IProps> = ({ icon, children, onClick }) => {
  return (
    <button className={styles.tag} onClick={onClick}>
      <Image className={styles.img} src={icon} alt='Иконка' width={24} height={24} />
      <p className={styles.text}>{children} </p>
    </button>
  );
};
