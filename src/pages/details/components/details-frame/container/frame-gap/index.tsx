import React from 'react';

interface IProps {
  size: number;
}

export const FrameGap: React.FC<IProps> = ({ size }) => {
  return <div style={{ marginBottom: `${size}px` }} />;
};
