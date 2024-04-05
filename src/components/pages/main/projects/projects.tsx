'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { getProjectList } from '@/_data/config/core';
import { useResize } from '@/_data';
import { ETextTheme, ETitleSize, MainBlock, Text, Title } from '@/components/shared';

import styles from './projects.module.scss';

export const ProjectsWidget: React.FC = () => {
  const width = useResize();
  const router = useRouter();

  const handleClickProject = (id: string) => {
    router.push(`/${id}`);
  };

  return (
    <MainBlock>
      <Title className={styles.title} size={ETitleSize.H2}>
        Проекты
      </Title>
      <div className={styles.projectWrapper}>
        {getProjectList().map((v) => (
          <div className={styles.project} onClick={() => handleClickProject(v.id)}>
            <img className={styles.img} src={v.imgSrc} alt='Картинка' />
            <div className={styles.projectTitleBlock}>
              <Title className={styles.projectTitle} size={ETitleSize.H3}>
                {v.title}
              </Title>
              <Image
                className={styles.icon}
                src='/icons/open-icon.svg'
                alt='Открыть проект'
                width={40}
                height={40}
              />
            </div>
            {width <= 860 ? (
              <>
                <Text theme={ETextTheme.SECOND}>{v.role}</Text>
                <Text theme={ETextTheme.SECOND}>{`${v.dates[0]}-${v.dates[1]}`}</Text>
              </>
            ) : (
              <Text theme={ETextTheme.SECOND}>{`${v.role} | ${v.dates[0]}-${v.dates[1]}`}</Text>
            )}
          </div>
        ))}
      </div>
    </MainBlock>
  );
};
