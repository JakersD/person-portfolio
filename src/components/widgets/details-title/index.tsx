import React from 'react';

import styles from './details-title.module.scss';
import { Title } from '@components/shared/text/title';
import { ETextTheme, ETitleSize } from '@components/shared/model';
import { Text } from '@components/shared/text/text';

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
