import React from 'react';

import { EBtnTheme } from '../model';
import { combineStyles } from '@data/utils/core';

import styles from './button.module.scss';
import { Link } from 'react-router-dom';

interface IProps {
  children: string;
  href: string;
  className?: string;
  theme?: EBtnTheme;
  arrowIcon?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<IProps> = ({
  theme = EBtnTheme.PRIMARY,
  arrowIcon,
  className,
  href,
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
    <Link
      to={href}
      target='_blank'
      onClick={onClick}
      className={combineStyles([getTheme(), className])}
    >
      {children}
    </Link>
  );
};
