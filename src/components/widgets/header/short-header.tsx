import React, { useState } from 'react';

import styles from './short-header.module.scss';
import { Logo } from './logo';
import { Nav } from './nav';
import { BurgerBtn } from '@shared/buttons/burger';

export const ShortHeaderWidget: React.FC = () => {
  const [active, setActive] = useState(false);

  const handleToggle = () => setActive(!active);

  return (
    <header className={active ? `${styles.header} ${styles.headerActive}` : styles.header}>
      <div className={active ? `${styles.modalLogo} ${styles.modalLogoActive}` : styles.modalLogo}>
        <Logo isModal={active} isShort />
        <BurgerBtn active={active} onClick={handleToggle} />
      </div>
      {active && <Nav />}
    </header>
  );
};
