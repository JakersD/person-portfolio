import React from 'react';

import { getEducationList } from '@data/config/core';

import styles from './education.module.scss';
import { ETitleSize, Title, Wrapper } from '@components/shared';
import { ItemList } from '@components/widgets';

export const EducationWidget: React.FC = () => {
  return (
    <Wrapper id='education'>
      <Title className={styles.title} size={ETitleSize.H2}>
        Образование
      </Title>
      <ItemList items={getEducationList()} />
    </Wrapper>
  );
};
