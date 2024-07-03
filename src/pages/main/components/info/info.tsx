import React from 'react';

import { ETitleSize, TagList, Text, Title, Wrapper } from '@components/shared';

import styles from './info.module.scss';

export const InfoWidget: React.FC = () => {
  return (
    <Wrapper>
      <div className={styles.wrapper}>
        <Title className={styles.title} size={ETitleSize.H1}>
          Екатерина Черкасова - продуктовый дизайнер
          <span className={styles.nowrap}> из Москвы</span>
        </Title>
        <Text className={styles.text}>
          Product Designer. В свободное время работаю над личными проектами, постоянно повышаю
          квалификацию. Моя цель - вносить вклад в создание инновационных и полезных продуктов.
        </Text>
        <TagList />
      </div>
    </Wrapper>
  );
};
