import React from 'react';

import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';
import { ETextTheme, ETitleSize, IconButton, Text, Title } from '@components/shared';
import { getUniqueKey } from '@data/utils/core';
import { useResize } from '@data/hooks';
import { EScreenSize } from '@data/hooks/useResize';

interface IProps {
  title: string;
  subtitle?: string;
  links?: Array<{
    link: string;
    icon: string;
  }>;
}

export const FrameHeader: React.FC<IProps> = ({ title, links, subtitle }) => {
  const navigate = useNavigate();
  const screenSize = useResize();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <button className={styles.back} onClick={handleBack}>
        Назад
      </button>
      <div className={styles.header}>
        <div>
          <Title className={styles.title} size={ETitleSize.H2}>
            {title}
          </Title>
          {subtitle && <Text theme={ETextTheme.SECOND}>{subtitle}</Text>}
        </div>
        {screenSize !== EScreenSize.SM && Array.isArray(links) && links.length >= 1 && (
          <div className={styles.headerLinks}>
            {links.map((link, i) => (
              <IconButton
                className={styles.link}
                key={getUniqueKey(link.link, i)}
                link={link.link}
                icon={link.icon}
                skeletal
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
