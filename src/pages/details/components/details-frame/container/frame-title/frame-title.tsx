import React from 'react';

import { ETitleSize, Title } from '@components/shared';

import styles from './frame-title.module.scss';
import { combineStyles } from '@data/utils/core';

interface ITitleProps {
  size?: ETitleSize;
  className?: string;
  children: string;
}

export const FrameTitle: React.FC<ITitleProps> = ({ children, size = ETitleSize.H4 }) => {
  return (
    <Title
      className={combineStyles([styles.title, size === ETitleSize.H3 ? styles.frame_title : null])}
      size={size}
    >
      {children}
    </Title>
  );
};
