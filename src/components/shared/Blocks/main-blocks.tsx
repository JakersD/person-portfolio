import React from 'react';
import styles from './main-blocks.module.scss';
import { combineStyles } from '@/_data';

interface IProps {
  children?: React.ReactNode;
  className?: string;
}

export const MainBlock: React.FC<IProps> = ({ className, children }) => {
  return <div className={combineStyles([styles.wrapper, className])}>{children}</div>;
};
