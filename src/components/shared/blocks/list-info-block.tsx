import React from 'react';

import { combineStyles } from '@data/utils/core';

import styles from './list-info-block.module.scss';

interface IProp {
  children?: React.ReactNode;
  className?: string;
}

export const ListInfoBlock: React.FC<IProp> = ({ children, className }) => {
  return <div className={combineStyles([styles.block, className])}>{children}</div>;
};
