import { ETitleSize, MainBlock, Text, Title } from '@/components/shared';
import React from 'react';

import styles from './skills.module.scss';

export const SkillsWidget: React.FC = () => {
  return (
    <MainBlock>
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
              <Text>Умение проводить юзабилити тестирование</Text>
            </li>
            <li className={styles.item}>
              <Text>Знание адаптивного дизайна</Text>
            </li>
            <li className={styles.item}>
              <Text>Знание дизайна мобильных приложений</Text>
            </li>
            <li className={styles.item}>
              <Text>Понимание HTML, CSS, JS</Text>
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
    </MainBlock>
  );
};
