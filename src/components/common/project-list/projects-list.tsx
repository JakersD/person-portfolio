'use client';

import React from 'react';
import * as ReactDOMServer from 'react-dom/server';

import { ETitleSize, MainBlock, Title } from '@/components/shared';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

import styles from './project-list.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getProjectsExcludeId, getQueryFromUrl, getUniqueKey } from '@/_data';
import { getProjectList } from '@/_data/config/core';
import { ProjectCard } from '@/components/shared/project-card/project-card';
import { Navigation, Pagination } from 'swiper/modules';
import { PaginationOptions } from 'swiper/types';
import { SwiperButtons } from './buttons';

export const ProjectList: React.FC = () => {
  const url = usePathname();
  const router = useRouter();

  const handleClickProject = (id: string) => {
    router.push(`/${id}`);
  };

  const paginationConfig: PaginationOptions = {
    el: `.${styles.dots}`,
    clickable: true,
    clickableClass: styles.swiperPagination,
    bulletClass: styles.swiperBullet,
    bulletActiveClass: styles.swiperBulletActive,
    renderBullet: (index: number, className: string) => {
      return `<span class="${className}">${index + 1}</span>`;
    },
  };

  return (
    <MainBlock>
      <Title className={styles.title} size={ETitleSize.H2}>
        Другие проекты
      </Title>
      <Swiper
        wrapperClass={styles.swiperWrapper}
        modules={[Navigation, Pagination]}
        slidesPerView={2}
        spaceBetween={24}
        pagination={paginationConfig}
        grabCursor
      >
        {getProjectsExcludeId(getProjectList(), getQueryFromUrl(url)).map((project, i) => (
          <SwiperSlide key={getUniqueKey(project.id, i)}>
            <ProjectCard project={project} index={i} onClick={handleClickProject} />
          </SwiperSlide>
        ))}
        <SwiperButtons>
          <div className={styles.dots} />
        </SwiperButtons>
      </Swiper>
    </MainBlock>
  );
};
