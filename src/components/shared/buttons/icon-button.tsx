import React from 'react';

import styles from './icon-button.module.scss';
import { combineStyles } from '@data/utils/core';

interface IProps {
  icon: string;
  className?: string;
  onClick?: () => void;
  link?: string;
  skeletal?: boolean;
}

export const IconButton: React.FC<IProps> = ({ icon, className, skeletal, link, onClick }) => {
  if (link) {
    return (
      <a
        href={link}
        className={combineStyles([skeletal ? styles.skeletalBtn : styles.btn, className])}
        onClick={onClick}
        target='_blank'
      >
        <img src={icon} alt='Иконка' />
      </a>
    );
  }

  return (
    <div
      className={combineStyles([skeletal ? styles.skeletalBtn : styles.btn, className])}
      onClick={onClick}
    >
      <img src={icon} alt='Иконка' />
    </div>
  );
};
