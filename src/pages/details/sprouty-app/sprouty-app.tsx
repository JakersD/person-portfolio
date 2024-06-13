import React from 'react';

import { Footer } from '@components/widgets/footer/footer';
import { PageWrapper, Wrapper } from '@components/shared';
import { DetailsFrame } from '../components/details-frame/details-frame';

import styles from './sprouty-app.module.scss';
import { Header, ZoomableImg } from '@components/widgets';

import mainMD from '@assets/sprouty-app/main-md.jpg';

export const SproutyApp: React.FC = () => {
  return (
    <PageWrapper>
      <div className={styles.wrapper}>
        <Header />
        <main className={styles.main}>
          <Wrapper>
            <ZoomableImg src={mainMD} />
          </Wrapper>

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
