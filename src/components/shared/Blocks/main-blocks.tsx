import React from 'react';
import styles from './main-blocks.module.scss';

interface IProps {
  children?: JSX.Element | JSX.Element[];
  className?: string;
}

export const MainBlock: React.FC<IProps> = ({ className, children }) => {
  return <div className={`${className} ${styles.wrapper}`}>{children}</div>;
};
