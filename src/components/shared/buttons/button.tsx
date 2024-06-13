import React from 'react';

import { EBtnTheme } from '../model';
import { combineStyles } from '@data/utils/core';

import styles from './button.module.scss';

interface IProps {
  children: string;
  onClick?: () => void;
  className?: string;
  theme?: EBtnTheme;
  arrowIcon?: boolean;
}

export const Button: React.FC<IProps> = ({
  theme = EBtnTheme.PRIMARY,
  arrowIcon,
  className,
  onClick,
  children,
}) => {
  const getTheme = () => {
    if (theme === EBtnTheme.PRIMARY) {
      return arrowIcon ? styles.primaryArrow : styles.primary;
    }

    return arrowIcon ? styles.secondaryArrow : styles.secondary;
  };

  return (
    <button onClick={onClick} className={combineStyles([getTheme(), className])}>
      {children}
    </button>
  );
};
