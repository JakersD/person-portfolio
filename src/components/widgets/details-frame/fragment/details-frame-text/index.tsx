import React from 'react';

import styles from './details-frame-text.module.scss';
import { Text } from '@components/shared/text/text';

interface ITextProps {
  children: string;
  margin?: boolean;
}

export const DetailsFrameText: React.FC<ITextProps> = ({ children, margin }) => {
  return <Text className={margin ? styles.margin : ''}>{children}</Text>;
};
