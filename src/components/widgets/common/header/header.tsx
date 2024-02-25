import React from 'react';

import { Logo } from './logo';
import { Nav } from './nav';

import styles from './header.module.scss';

export const HeaderWidget: React.FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Nav />
    </header>
  );
};
