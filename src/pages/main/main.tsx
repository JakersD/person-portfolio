import React, { useEffect } from 'react';

import {
  EducationWidget,
  ExperienceWidget,
  InfoWidget,
  ProjectsWidget,
  SkillsWidget,
} from './components';

import styles from './main.module.scss';
import { Footer, Header } from '@components/widgets';
import { PageWrapper } from '@components/shared';
import { hit } from '@data/utils/metrika';

export const MainPage: React.FC = () => {
  useEffect(() => {
    hit(window.location.pathname + window.location.search);
  }, []);

  return (
    <PageWrapper>
      <div className={styles.wrapper}>
        <Header />
        <main className={styles.main}>
          <InfoWidget />
          <ProjectsWidget />
          <ExperienceWidget />
          <SkillsWidget />
          <EducationWidget />
          <Footer />
        </main>
      </div>
    </PageWrapper>
  );
};
