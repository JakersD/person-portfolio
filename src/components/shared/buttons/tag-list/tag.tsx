import React from 'react';

import styles from './tag.module.scss';

interface IProps {
  icon: string;
  children: string;
  onClick?: () => void;
}

export const Tag: React.FC<IProps> = ({ icon, children, onClick }) => {
  return (
    <button className={styles.tag} onClick={onClick}>
      <img className={styles.img} src={icon} alt='Иконка' />
      <p className={styles.text}>{children} </p>
    </button>
  );
};
