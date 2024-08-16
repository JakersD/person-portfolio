import React from 'react';

import styles from './frame-text-link.module.scss';

interface IProps {
  href: string;
  children: React.ReactElement | string;
}

export const FrameTextLink: React.FC<IProps> = ({ href, children }) => {
  return (
    <a href={href} className={styles.link} target='_blank'>
      {children}
    </a>
  );
};
