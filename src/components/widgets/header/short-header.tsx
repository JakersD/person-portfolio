import React, { useState } from 'react';

import { Logo } from './logo/logo';
import { Nav } from './nav/nav';
import { BurgerButton } from '@components/shared';

import styles from './short-header.module.scss';

export const ShortHeaderWidget: React.FC = () => {
  const [active, setActive] = useState(false);

  const handleToggle = () => setActive(!active);

  return (
    <header className={active ? `${styles.header} ${styles.headerActive}` : styles.header}>
      <div className={active ? `${styles.modalLogo} ${styles.modalLogoActive}` : styles.modalLogo}>
        <Logo isModal={active} isShort />
        <BurgerButton active={active} onClick={handleToggle} />
      </div>
      {active && <Nav />}
    </header>
  );
};
