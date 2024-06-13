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

          <DetailsFrame>
            <DetailsFrame.Container>
              <DetailsFrame.Container.Title>Гипотезы</DetailsFrame.Container.Title>
              <DetailsFrame.Container.Text>
                После конкурентного анализа был составлен список гипотез. Для того, чтобы проверить гипотезы,
                мы в ходе интервью решили опросить респондентов. Гипотеза считалась бы доказанной, если хотя
                бы 7/10 респондентов подтвердили бы ее. Предполагается, что пользователи, которые используют
                приложение, хотели бы:
              </DetailsFrame.Container.Text>
            </DetailsFrame.Container>
          </DetailsFrame>

          {/* <ProjectList /> */}

          <Footer />
        </main>
      </div>
    </PageWrapper>
  );
};
