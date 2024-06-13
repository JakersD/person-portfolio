import React from 'react';

import { ShortHeaderWidget } from '@components/widgets/header/short-header';
import { Footer } from '@components/widgets/footer/footer';
import { PageWrapper } from '@components/shared';
import { DetailsFrame } from '../components/details-frame/details-frame';

import styles from './sprouty-app.module.scss';

export const SproutyApp: React.FC = () => {
  return (
    <PageWrapper>
      <div className={styles.wrapper}>
        <ShortHeaderWidget />
        <main className={styles.main}>
          <DetailsFrame>
            <DetailsFrame.Container>
              <p>Привет</p>
            </DetailsFrame.Container>
          </DetailsFrame>

          <DetailsFrame>
            <DetailsFrame.Container>
              <p>ХУЙЛО</p>
            </DetailsFrame.Container>
          </DetailsFrame>

          {/* <ProjectList /> */}

          <Footer />
        </main>
      </div>
    </PageWrapper>
  );
};
