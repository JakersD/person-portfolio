import React from 'react';
import styles from './main-blocks.module.scss';

interface IProps {
  size?: 'main' | 'small';
  children?: JSX.Element;
}

export const MainBlock: React.FC<IProps> = ({ children, size = 'main' }) => {
  return <div className={size === 'main' ? styles.wrapper : styles.wrapperSmall}>{children}</div>;
};
