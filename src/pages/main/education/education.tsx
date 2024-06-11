import React from 'react';

import styles from './education.module.scss';
import { MainBlock } from '@shared/blocks/main-block';
import { Title } from '@shared/text/title';
import { ETitleSize } from '@shared/model';
import { ItemList } from '@widgets/item-list/item-list';
import { getEducationList } from '@data/config/core';

export const EducationWidget: React.FC = () => {
  return (
    <MainBlock>
      <Title className={styles.title} size={ETitleSize.H2}>
        Образование
      </Title>
      <ItemList items={getEducationList()} />
    </MainBlock>
  );
};
