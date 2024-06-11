import React from 'react';

import { combineStyles } from '@data/utils/core';

import styles from './main-blocks.module.scss';

interface IProps {
  children?: React.ReactNode;
  className?: string;
}

export const MainBlock: React.FC<IProps> = ({ className, children }) => {
  return <div className={combineStyles([styles.wrapper, className])}>{children}</div>;
};
