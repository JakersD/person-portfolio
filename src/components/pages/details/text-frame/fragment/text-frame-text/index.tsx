import React from 'react';

import { Text } from '@/components/shared';

import styles from './text-frame-text.module.scss';

interface ITextProps {
  children: string;
  margin?: boolean;
}

export const TextFrameText: React.FC<ITextProps> = ({ children, margin }) => {
  return <Text className={margin ? styles.margin : ''}>{children}</Text>;
};
