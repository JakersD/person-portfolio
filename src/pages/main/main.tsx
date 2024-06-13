import React from 'react';

import { InfoWidget } from './info/info';
import { ProjectsWidget } from './projects/projects';
import { ExperienceWidget } from './experience/experience';
import { SkillsWidget } from './skills/skills';
import { EducationWidget } from './education/education';

import styles from './main.module.scss';
import { Footer, Header } from '@components/widgets';
import { PageWrapper } from '@components/shared';

export const MainPage: React.FC = () => {
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
