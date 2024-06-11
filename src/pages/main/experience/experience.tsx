import React from 'react';

import styles from './experience.module.scss';
import { MainBlock } from '@shared/blocks/main-block';
import { Title } from '@shared/text/title';
import { ETitleSize } from '@shared/model';
import { ItemList } from '@widgets/item-list/item-list';
import { getJobList } from '@data/config/core';

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
