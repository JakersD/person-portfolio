import React from 'react';

import { ETitleSize, Title } from '@components/shared';

import styles from './frame-title.module.scss';

interface ITitleProps {
  size?: ETitleSize;
  children: string;
}

export const FrameTitle: React.FC<ITitleProps> = ({ children, size = ETitleSize.H4 }) => {
  return (
    <Title className={styles.title} size={size}>
      {children}
    </Title>
  );
};
