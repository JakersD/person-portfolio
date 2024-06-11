import React from 'react';

import styles from './nav.module.scss';
import { getUniqueKey } from '@data/utils/core';
import { Btn } from '@shared/buttons/btn';

const getNavList = () => [
  {
    title: 'Проекты',
    link: 'projects',
  },
  {
    title: 'Опыт',
    link: 'experience',
  },
  {
    title: 'Навыки',
    link: 'skills',
  },
  {
    title: 'Образование',
    link: 'education',
  },
  {
    title: 'Контакты',
    link: 'contacts',
  },
];

export const Nav: React.FC = () => {
  return (
    <>
      <ul className={styles.list}>
        {getNavList().map((v, i) => (
          <li className={styles.elem} key={getUniqueKey(v.link, i)}>
            <a className={styles.link} href={`#${v.link}`}>
              {v.title}
            </a>
          </li>
        ))}
      </ul>
      <Btn className={styles.btn} arrowIcon>
        Связаться со мной
      </Btn>
    </>
  );
};
