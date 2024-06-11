import { Footer } from '@widgets/footer/footer';
import { Header } from '@widgets/header/header';

import styles from './main.module.scss';

import React from 'react';
import { InfoWidget } from './info/info';
import { ProjectsWidget } from './projects/projects';
import { ExperienceWidget } from './experience/experience';
import { SkillsWidget } from './skills/skills';
import { EducationWidget } from './education/education';

export const MainPage: React.FC = () => {
  return (
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
  );
};
