import React from 'react';

import styles from './icon-button.module.scss';
import { combineStyles } from '@data/utils/core';

interface IProps {
  icon: string;
  className?: string;
  onClick?: () => void;
}

export const IconButton: React.FC<IProps> = ({ icon, className, onClick }) => {
  return (
    <div className={combineStyles([styles.btn, className])} onClick={onClick}>
      <img src={icon} alt='Иконка' />
    </div>
  );
};
