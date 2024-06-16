import React from 'react';

import { Text } from '@components/shared/text/text';

interface ITextProps {
  children: string;
}

export const FrameText: React.FC<ITextProps> = ({ children }) => {
  return <Text>{children}</Text>;
};
