'use client';

import React from 'react';
import { SText } from './text.styled';
import { ETextSize, ETextWeight } from '../model';

interface IProps {
  children: string;
  className?: string;
  weight?: ETextWeight;
  size?: ETextSize;
}

export const Text: React.FC<IProps> = ({
  children,
  className,
  size = ETextSize.MD,
  weight = ETextWeight.NORMAL,
}) => {
  return (
    <SText className={className} size={size} weight={weight}>
      {children}
    </SText>
  );
};
