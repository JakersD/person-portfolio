import React from 'react';

import { ETextSize, ETextTheme, ETextWeight } from '../model';
import { combineStyles } from '@data/utils/core';

import styles from './text.module.scss';

interface IProps {
  children: string;
  className?: string;
  weight?: ETextWeight;
  size?: ETextSize;
  theme?: ETextTheme;
}

export const Text: React.FC<IProps> = ({
  children,
  className,
  size = ETextSize.MD,
  weight = ETextWeight.NORMAL,
  theme = ETextTheme.GENERAL,
}) => {
  const renderWeight = () => (weight === ETextWeight.BOLD ? styles.textWeightBold : undefined);

  const renderSize = () => (size === ETextSize.MD ? styles.textMD : styles.textSM);

  const renderTheme = () => {
    switch (theme) {
      case ETextTheme.GENERAL:
        return styles.general;
      case ETextTheme.SECOND:
        return styles.second;
      case ETextTheme.BLACK:
        return styles.black;
    }
  };

  return (
    <p className={combineStyles([renderSize(), renderWeight(), renderTheme(), className])}>{children}</p>
  );
};
