import React, { useEffect, useState } from 'react';

import { Logo } from './logo/logo';
import { Nav } from './nav/nav';
import { BurgerButton } from '@components/shared';

import styles from './short-header.module.scss';

export const ShortHeaderWidget: React.FC = () => {
  const [active, setActive] = useState(false);

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const handleToggle = () => setActive(!active);

  const headerStyle = () => {
    if (active) {
      return `${styles.header} ${styles.headerActive}`;
    }

    return show ? styles.header : `${styles.header} ${styles.headerHide}`;
  };
  return (
    <header className={headerStyle()}>
      <div className={active ? `${styles.modalLogo} ${styles.modalLogoActive}` : styles.modalLogo}>
        <Logo isModal={active} isShort />
        <BurgerButton active={active} onClick={handleToggle} />
      </div>
      {active && <Nav />}
    </header>
  );
};
