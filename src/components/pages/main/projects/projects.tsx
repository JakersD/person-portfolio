'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import { getProjectList } from '@/_data/config/core';
import { ETitleSize, MainBlock, Title } from '@/components/shared';

import styles from './projects.module.scss';
import { ProjectCard } from '@/components/shared/project-card/project-card';

export const ProjectsWidget: React.FC = () => {
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
        {getProjectList().map((v, i) => (
          <ProjectCard project={v} index={i} onClick={handleClickProject} />
        ))}
      </div>
    </MainBlock>
  );
};
