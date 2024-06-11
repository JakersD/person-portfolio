import React from 'react';

import styles from './projects.module.scss';
import { MainBlock } from '@shared/blocks/main-block';
import { Title } from '@shared/text/title';
import { ETitleSize } from '@shared/model';
import { ProjectCard } from '@shared/project-card/project-card';
import { getProjectList } from '@data/config/core';
import { getUniqueKey } from '@data/utils/core';
import { useNavigate } from 'react-router-dom';

export const ProjectsWidget: React.FC = () => {
  const navigate = useNavigate();

  const handleClickProject = (id: string) => {
    navigate(`projects/${id}`);
  };

  return (
    <MainBlock>
      <Title className={styles.title} size={ETitleSize.H2}>
        Проекты
      </Title>
      <div className={styles.projectWrapper}>
        {getProjectList().map((v, i) => (
          <ProjectCard key={getUniqueKey(v.id, i)} project={v} index={i} onClick={handleClickProject} />
        ))}
      </div>
    </MainBlock>
  );
};
