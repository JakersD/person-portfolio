import React from 'react';

import styles from './burger.module.scss';

interface IProps {
  active: boolean;
  onClick?: () => void;
}

export const BurgerBtn: React.FC<IProps> = ({ active, onClick }) => {
  return (
    <button className={active ? `${styles.burger} ${styles.active}` : styles.burger} onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};
