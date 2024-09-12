import React from 'react';
import { useNavigate } from 'react-router-dom';

import { getProjectList } from '@data/config/core';
import { getUniqueKey } from '@data/utils/core';
import { ETitleSize, Title, Wrapper } from '@components/shared';
import { ProjectCard } from '@components/widgets';

import styles from './projects.module.scss';
import { goalLMSCase, goalRosSkill, goalSproutyApp } from '@data/utils/metrika';

export const ProjectsWidget: React.FC = () => {
  const navigate = useNavigate();

  const handleClickProject = (id: string) => {
    switch (id) {
      case 'ros-skill':
        goalRosSkill();
        break;
      case 'lms-data-diving':
        goalLMSCase();
        break;
      case 'sprouty-app':
        goalSproutyApp();
        break;
    }

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
