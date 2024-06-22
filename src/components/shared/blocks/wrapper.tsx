import React from 'react';

import { combineStyles } from '@data/utils/core';

import styles from './wrapper.module.scss';

interface IProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export const Wrapper: React.FC<IProps> = ({ className, children, id }) => {
  return (
    <div id={id} className={combineStyles([styles.wrapper, className])}>
      {children}
    </div>
  );
};
