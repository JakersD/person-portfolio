import React from 'react';

import { ETitleSize, MainBlock, Title } from '@/components/shared';
import { ItemList } from '@/components/common';
import { getEducationList } from '@/_data/config/core';

import styles from './education.module.scss';

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
