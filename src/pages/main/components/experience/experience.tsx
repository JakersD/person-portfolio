import React from 'react';

import { getJobList } from '@data/config/core';
import { ETitleSize, Title, Wrapper } from '@components/shared';
import { ItemList } from '@components/widgets';

import styles from './experience.module.scss';

export const ExperienceWidget: React.FC = () => {
  return (
    <Wrapper id='experience'>
      <Title className={styles.title} size={ETitleSize.H2}>
        Опыт работы
      </Title>
      <ItemList items={getJobList()} />
    </Wrapper>
  );
};
