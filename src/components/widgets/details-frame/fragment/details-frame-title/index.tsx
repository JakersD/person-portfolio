import React from 'react';

import styles from './details-frame-title.module.scss';
import { Title } from '@components/shared/text/title';
import { ETitleSize } from '@components/shared/model';

interface ITitleProps {
  size?: ETitleSize;
  children: string;
}

export const DetailsFrameTitle: React.FC<ITitleProps> = ({ children, size = ETitleSize.H4 }) => {
  return (
    <Title className={styles.title} size={size}>
      {children}
    </Title>
  );
};
