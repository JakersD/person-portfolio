import React from 'react';

import { Logo } from './logo/logo';
import { Nav } from './nav/nav';
import { EScreenSize, useResize } from '@data/hooks/useResize';

import styles from './header.module.scss';
import { ShortHeaderWidget } from './short-header';

export const Header: React.FC = () => {
  const screenSize = useResize();

  if (screenSize !== EScreenSize.FULL) {
    return <ShortHeaderWidget />;
  }

  return (
    <header className={styles.header}>
      <Logo />
      <Nav />
    </header>
  );
};
