import React from 'react';
import Image from 'next/image';

import styles from './project-card.module.scss';
import { IProject } from '@/_data/models/project';
import { getUniqueKey, useResize } from '@/_data';
import { Title } from '../text/title';
import { ETextTheme, ETitleSize } from '../model';
import { Text } from '../text/text';

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
        <Image
          className={styles.icon}
          src='/icons/open-icon.svg'
          alt='Открыть проект'
          width={40}
          height={40}
        />
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
