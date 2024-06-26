import React from 'react';

import { ETextTheme, ETitleSize, Text, Title } from '@components/shared';
import { IProject } from '@data/models/project';
import { useResize } from '@data/hooks';
import { getUniqueKey } from '@data/utils/core';

import openIcon from '@assets/icons/open-icon.svg';
import styles from './project-card.module.scss';

interface IProps {
  project: IProject;
  index: number;
  onClick: (id: string) => void;
}

export const ProjectCard: React.FC<IProps> = ({ project, index, onClick }) => {
  const width = useResize();

  return (
    <div className={styles.project} onClick={() => onClick(project.id)} key={getUniqueKey(project.id, index)}>
      <img className={styles.img} src={project.imgSrc} alt='Картинка' />
      <div className={styles.projectTitleBlock}>
        <Title className={styles.projectTitle} size={ETitleSize.H3}>
          {project.title}
        </Title>
        <img className={styles.icon} src={openIcon} alt='Открыть проект' />
      </div>
      {width && width <= 860 ? (
        <>
          <Text theme={ETextTheme.SECOND}>{project.role}</Text>
          <Text theme={ETextTheme.SECOND}>{`${project.dates[0]}-${project.dates[1]}`}</Text>
        </>
      ) : (
        <Text theme={ETextTheme.SECOND}>{`${project.role} | ${project.dates[0]}-${project.dates[1]}`}</Text>
      )}
    </div>
  );
};
