import React from 'react';
import { useNavigate } from 'react-router-dom';

import { getProjectList } from '@data/config/core';
import { getUniqueKey } from '@data/utils/core';
import { ETitleSize, Title, Wrapper } from '@components/shared';
import { ProjectCard } from '@components/widgets';

import styles from './projects.module.scss';

export const ProjectsWidget: React.FC = () => {
  const navigate = useNavigate();

  const handleClickProject = (id: string) => {
    navigate(`projects/${id}`);
  };

  return (
    <Wrapper id='projects'>
      <Title className={styles.title} size={ETitleSize.H2}>
        Проекты
      </Title>
      <div className={styles.projectWrapper}>
        {getProjectList().map((v, i) => (
          <ProjectCard
            key={getUniqueKey(v.id, i)}
            project={v}
            index={i}
            onClick={handleClickProject}
          />
        ))}
      </div>
    </Wrapper>
  );
};
