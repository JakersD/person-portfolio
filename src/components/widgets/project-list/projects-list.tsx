import { useLocation, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { PaginationOptions } from 'swiper/types';

import { ETitleSize, Title, Wrapper } from '@components/shared';
import { getProjectsExcludeId, getQueryFromUrl, getUniqueKey } from '@data/utils/core';
import { getProjectList } from '@data/config/core';
import { SwiperButtons } from './swiper-buttons';
import { ProjectCard } from '../project-card/project-card';

import styles from './project-list.module.scss';

export const ProjectList: React.FC = () => {
  const url = useLocation().pathname;
  const navigate = useNavigate();

  const handleClickProject = (id: string) => {
    navigate(`/projects/${id}`);
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
    <Wrapper>
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
    </Wrapper>
  );
};
