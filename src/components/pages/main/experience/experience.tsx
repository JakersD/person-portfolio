import React from 'react';
import styles from './experience.module.scss';
import { getJobList } from '@/_data/config/core';
import { ETitleSize, MainBlock, Title } from '@/components/shared';
import { ItemList } from '@/components/common';

export const ExperienceWidget: React.FC = () => {
  return (
    <MainBlock>
      <Title className={styles.title} size={ETitleSize.H2}>
        Опыт работы
      </Title>
      <ItemList items={getJobList()} />
    </MainBlock>
  );
};