import { HeaderWidget } from '@/components/widgets/common';
import styles from './page.module.scss';
import { MainInfoWidget } from '@/components/widgets';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <HeaderWidget />
      <main className={styles.main}>
        <MainInfoWidget />
        <footer></footer>
      </main>
    </div>
  );
}
