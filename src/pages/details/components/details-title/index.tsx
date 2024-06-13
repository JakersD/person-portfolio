import React from 'react';

import { ETextTheme, ETitleSize, Text, Title } from '@components/shared';

import styles from './details-title.module.scss';

interface IProps {
  title: string;
  subtitle: string;
}

export const DetailsTitle: React.FC<IProps> = ({ title, subtitle }) => {
  return (
    <>
      <Title className={styles.title} size={ETitleSize.H2}>
        {title}
      </Title>
      <Text className={styles.subtitle} theme={ETextTheme.SECOND}>
        {subtitle}
      </Text>
    </>
  );
};
