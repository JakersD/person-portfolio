import React from 'react';
import styles from './experience.module.scss';
import { ETitleSize, ItemList, MainBlock, Title } from '@/components';
import { getJobList } from '@/_data/config/core';

export const MainExperienceWidget: React.FC = () => {
  return (
    <MainBlock>
      <Title className={styles.title} size={ETitleSize.H2}>
        Опыт работы
      </Title>
      <ItemList items={getJobList()} />
    </MainBlock>
  );
};
