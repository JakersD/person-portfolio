import React from 'react';
import { ScrollRestoration } from 'react-router-dom';

interface IProps {
  children: React.ReactNode;
}

export const PageWrapper: React.FC<IProps> = ({ children }) => {
  return (
    <>
      {children}
      <ScrollRestoration />
    </>
  );
};
