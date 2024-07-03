import React from 'react';

import { ETitleSize, Text, Title, Wrapper } from '@components/shared';

import styles from './skills.module.scss';

export const SkillsWidget: React.FC = () => {
  return (
    <Wrapper id='skills'>
      <div className={styles.parent}>
        <div className={styles.skills}>
          <Title className={styles.title} size={ETitleSize.H2}>
            Hard skills
          </Title>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Text>Знание принципов дизайна</Text>
            </li>
            <li className={styles.item}>
              <Text>Умение проводить UX исследования</Text>
            </li>
            <li className={styles.item}>
              <Text>Понимание HTML, CSS, JS</Text>
            </li>
            <li className={styles.item}>
              <Text>Гайдлайны IOS и Material Design</Text>
            </li>
            <li className={styles.item}>
              <Text>Умею работать с метриками</Text>
            </li>
          </ul>
        </div>
        <div className={styles.skills}>
          <Title className={styles.title} size={ETitleSize.H2}>
            Soft skills
          </Title>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Text>Креативность</Text>
            </li>
            <li className={styles.item}>
              <Text>Внимание к деталям</Text>
            </li>
            <li className={styles.item}>
              <Text>Умение работать в команде</Text>
            </li>
            <li className={styles.item}>
              <Text>Умение принимать критику</Text>
            </li>
            <li className={styles.item}>
              <Text>Обучаемость</Text>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};
