import React from 'react';

import { getUniqueKey } from '@data/utils/core';
import { Button } from '@components/shared';

import styles from './nav.module.scss';
import { useNavigate } from 'react-router-dom';
import { ELinks } from '@data/config/links';

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
  const navigate = useNavigate();

  const anchorRedirect = (link: string) => {
    if (link === 'contacts') {
      return navigate(`#${link}`);
    }

    return navigate(`/#${link}`);
  };

  return (
    <>
      <ul className={styles.list}>
        {getNavList().map((v, i) => (
          <li className={styles.elem} key={getUniqueKey(v.link, i)}>
            <p className={styles.link} onClick={() => anchorRedirect(v.link)}>
              {v.title}
            </p>
          </li>
        ))}
      </ul>
      <Button className={styles.btn} arrowIcon href={ELinks.TELEGRAM}>
        Связаться со мной
      </Button>
    </>
  );
};
