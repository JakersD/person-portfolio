import { HeaderWidget } from '@/components/widgets/common';
import styles from './page.module.scss';
import { MainExperienceWidget, MainInfoWidget, MainProjectsWidget } from '@/components/widgets';
import { FooterWidget } from '@/components/widgets/common/footer/footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <MainInfoWidget />
      <MainProjectsWidget />
      <MainExperienceWidget />
      <FooterWidget />
    </main>
  );
}
