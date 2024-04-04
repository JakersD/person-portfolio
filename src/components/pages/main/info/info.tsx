import React from 'react';

import styles from './info.module.scss';
import { ETitleSize, MainBlock, TagList, Text, Title } from '@/components/shared';

export const InfoWidget: React.FC = () => {
  return (
    <MainBlock>
      <div className={styles.wrapper}>
        <Title className={styles.title} size={ETitleSize.H1}>
          Екатерина Черкасова - продуктовый дизайнер <span className={styles.nowrap}>из Москвы</span>
        </Title>
        <Text className={styles.text}>
          Senior Product Designer at Yandex Plus. In my spare time, I work on side projects, take part in
          hackathons, and share insights about career, design and processes in my Telegram channel. Currently
          based in Belgrade, Serbia.
        </Text>
        <TagList />
      </div>
    </MainBlock>
  );
};
