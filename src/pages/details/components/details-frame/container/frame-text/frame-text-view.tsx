import React from 'react';

import { Text } from '@components/shared/text/text';

interface ITextProps {
  children: any;
}

export const FrameTextView: React.FC<ITextProps> = ({ children }) => {
  return <Text>{children}</Text>;
};
