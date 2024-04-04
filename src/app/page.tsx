import {
  EducationWidget,
  ExperienceWidget,
  InfoWidget,
  ProjectsWidget,
  SkillsWidget,
} from '@/components/pages';
import styles from './page.module.scss';
import { FooterWidget } from '@/components/common';

export default function Home() {
  return (
    <main className={styles.main}>
      <InfoWidget />
      <ProjectsWidget />
      <ExperienceWidget />
      <SkillsWidget />
      <EducationWidget />
      <FooterWidget />
    </main>
  );
}
