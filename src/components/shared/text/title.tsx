'use client';

import React from 'react';
import { ETitleSize } from '..';
import { SH1, SH2, SH3, SH4, SH5, SH6 } from './title.styled';

interface IProps {
  size: ETitleSize;
  children: any;
  className?: string;
}

export const Title: React.FC<IProps> = ({ size, children, className }) => {
  const renderTitle = (): JSX.Element => {
    switch (size) {
      case ETitleSize.H1:
        return <SH1 className={className}>{children}</SH1>;
      case ETitleSize.H2:
        return <SH2 className={className}>{children}</SH2>;
      case ETitleSize.H3:
        return <SH3 className={className}>{children}</SH3>;
      case ETitleSize.H4:
        return <SH4 className={className}>{children}</SH4>;
      case ETitleSize.H5:
        return <SH5 className={className}>{children}</SH5>;
      case ETitleSize.H6:
        return <SH6 className={className}>{children}</SH6>;
    }
  };

  return renderTitle();
};
