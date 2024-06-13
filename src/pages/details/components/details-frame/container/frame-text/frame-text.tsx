import React from 'react';

import { Text } from '@components/shared/text/text';

import styles from './frame-text.module.scss';

interface ITextProps {
  children: string;
  margin?: boolean;
}

export const FrameText: React.FC<ITextProps> = ({ children, margin }) => {
  return <Text className={margin ? styles.margin : ''}>{children}</Text>;
};
