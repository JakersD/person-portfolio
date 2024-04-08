import React from 'react';

import {
  EducationWidget,
  ExperienceWidget,
  InfoWidget,
  ProjectsWidget,
  SkillsWidget,
} from '@/components/pages';
import { FooterWidget, HeaderWidget } from '@/components/common';

import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <HeaderWidget />
      <main className={styles.main}>
        <InfoWidget />
        <ProjectsWidget />
        <ExperienceWidget />
        <SkillsWidget />
        <EducationWidget />
        <FooterWidget />
      </main>
    </div>
  );
}
