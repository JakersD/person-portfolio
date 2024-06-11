import React, { useState } from 'react';

import { Logo } from './logo';
import { Nav } from './nav';

import styles from './header.module.scss';
import { useResize } from '@data/hooks/useResize';
import { BurgerBtn } from '@shared/buttons/burger';

export const Header: React.FC = () => {
  const [active, setActive] = useState(false);

  const width = useResize();

  const handleToggle = () => setActive(!active);

  if (width && width <= 1196) {
    return (
      <header className={active ? `${styles.header} ${styles.headerActive}` : styles.header}>
        <div className={active ? `${styles.modalLogo} ${styles.modalLogoActive}` : styles.modalLogo}>
          <Logo isModal={active} />
          <BurgerBtn active={active} onClick={handleToggle} />
        </div>
        {active && <Nav />}
      </header>
    );
  }

  return (
    <header className={styles.header}>
      <Logo />
      <Nav />
    </header>
  );
};
