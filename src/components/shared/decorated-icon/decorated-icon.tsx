import React from 'react';
import { combineStyles } from '@data/utils/core';

import styles from './decorated-icon.module.scss';

interface IProps {
  icon: string;
  className?: string;
}

export const DecoratedIcon: React.FC<IProps> = ({ icon, className }) => {
  return (
    <div className={combineStyles([styles.icon, className])}>
      <img src={icon} alt='инока' />
    </div>
  );
};
