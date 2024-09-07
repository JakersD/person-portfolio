import React from 'react';
import { ETitleSize, PageWrapper } from '@components/shared';
import { Footer, ProjectList, ShortHeaderWidget } from '@components/widgets';
import { DetailsFrame } from '../components';
import styles from './ros.module.scss';

import globeSceletalIcon from '@assets/icons/globe-skeletal.svg';

import mainImg from '@assets/ros/main1.webp';

import analyticsImg1 from '@assets/ros/analytics1.webp';
import analyticsImg2 from '@assets/ros/analytics2.webp';

import cjmImg1 from '@assets/ros/cjm1.webp';
import cjmImg2 from '@assets/ros/cjm2.webp';
import cjmImg3 from '@assets/ros/cjm3.webp';

import userDesignImg1 from '@assets/ros/userDesign1.webp';
import userDesignImg2 from '@assets/ros/userDesign2.webp';
import userDesignImg3 from '@assets/ros/userDesign3.webp';
import userDesignImg4 from '@assets/ros/userDesign4.webp';

import adminDesignImg1 from '@assets/ros/adminDesign1.webp';
import adminDesignImg2 from '@assets/ros/adminDesign2.webp';
import adminDesignImg3 from '@assets/ros/adminDesign3.webp';
import adminDesignImg4 from '@assets/ros/adminDesign4.webp';
import { interviewTableData, processMultiList, resultMultiList } from './config';

export const RosDetails: React.FC = () => {
  return (
    <PageWrapper>
      <div className={styles.wrapper}>
        <ShortHeaderWidget />
        <main className={styles.main}>
          <DetailsFrame>
            <DetailsFrame.Container>
              <DetailsFrame.Container.Header
                title='Сервис для анализа рынка труда РосНавык'
                subtitle='Product Designer | 2023-2024'
                links={[
                  {
                    icon: globeSceletalIcon,
                    link: 'https://rosnavyk.ru/',
                  },
                ]}
              />
            </DetailsFrame.Container>
            <DetailsFrame.Container.Gap size={8} />
            <DetailsFrame.Container>
              <DetailsFrame.Container.Gallery images={[mainImg]} />
            </DetailsFrame.Container>
          </DetailsFrame>

          <DetailsFrame>
            <DetailsFrame.Container>
              <DetailsFrame.Container.Title size={ETitleSize.H3}>
                Продукт
              </DetailsFrame.Container.Title>
              <DetailsFrame.Container.Text>
                Роснавык это онлайн платформа, предназначенная для работодателей и руководителей
                образовательных программ. Сервис позволяет получить персональную аналитику биржи
                труда под свой собственный запрос. Используя платформу, руководители образовательных
                программ могут получить аналитику и понять, каким навыкам нужно учить, чтобы
                выпускники был востребованы на рынке труда. Задачей продукта стало отсутствие
                интерфейса для заказа и предоставления аналитики для администратора и пользователя.
              </DetailsFrame.Container.Text>
            </DetailsFrame.Container>
            <DetailsFrame.Container>
              <DetailsFrame.Container.Title>Задачи продукта</DetailsFrame.Container.Title>
              <DetailsFrame.Container.List
                list={[
                  'Сервис должен предоставлять аналитику в доступной и понятной форме, избавляя руководителей от необходимости самостоятельно анализировать большие объемы данных.',
                  'Сервис должен позволять руководителям сравнивать данные о востребованности навыков в разных регионах, отраслях или профессиях, чтобы  оценивать перспективы  разных  вариантов  развития  учебной  программы.',
                  'Сервис должен быть интуитивно понятным и не требовать специальных знаний в области анализа данных, чтобы быть доступным широкому кругу пользователей.',
                  'Пользователи  должны  иметь  возможность  настроить  запрос  в  соответствии  с  их  конкретными  потребностями.',
                ]}
              />
            </DetailsFrame.Container>
          </DetailsFrame>

          <DetailsFrame>
            <DetailsFrame.Container>
              <DetailsFrame.Container.Title size={ETitleSize.H3}>
                Процесс работы
              </DetailsFrame.Container.Title>
              <DetailsFrame.Container.Text>
                Процесс работы над созданием платформы был разделен на следующие этапы:
              </DetailsFrame.Container.Text>
              <DetailsFrame.Container.Gap size={12} />
              <DetailsFrame.Container.List
                list={[
                  'Провести анализ рынка труда, чтобы получить представление о востребованных навыках, профессиях, тенденциях и т.д.',
                  'Определить целевую аудиторию, определить  ключевые  функции  сервиса,  которые  будут  решать  задачи  пользователей.',
                  'Провести глубинные интервью с руководителями образовательных программ, чтобы понять их задачи, потребности и болевые точки.',
                  'Построить информационную архитектуру и CJM.',
                  'Создать  простой  прототип  сервиса,  который  будет  демонстрировать  ключевые  функции  и  возможности.',
                  'Провести  тестирование  прототипа  с  целевой  аудиторией,  чтобы  получить  обратную  связь  и  внести  необходимые  коррективы.',
                  'Финальный дизайн. Запуск и мониторинг.',
                ]}
              />
            </DetailsFrame.Container>

            <DetailsFrame.Container>
              <DetailsFrame.Container.Title>Ключевые метрики успеха</DetailsFrame.Container.Title>
              <DetailsFrame.Container.Text>
                Я определила ключевые метрики успеха, исходя из того, что наш сервис должен
                приносить пользу пользователм. Мне важно знать, насколько активно они используют
                платформу, насколько им полезна полученная информация и насколько она влияет на их
                решения. Метрики измерялись в два этапа: до и после реализации нового функционала.
              </DetailsFrame.Container.Text>
              <DetailsFrame.Container.Gap size={12} />
              <DetailsFrame.Container.MultiList tableData={processMultiList} isImg />
            </DetailsFrame.Container>
          </DetailsFrame>

          <DetailsFrame>
            <DetailsFrame.Container>
              <DetailsFrame.Container.Title size={ETitleSize.H3}>
                Анализ целевой аудитории и гипотезы
              </DetailsFrame.Container.Title>
              <DetailsFrame.Container.Text>
                При определении целевой аудитории стало понятно, что сервис по проверке
                востребованности образования и навыков на бирже труда адресован в первую очередь
                руководителям образовательных программ. Они заинтересованы в том, чтобы их
                выпускники были востребованы на рынке труда, и хотят знать, каким навыкам нужно
                учить, чтобы это обеспечить. Также сервис может быть интересен преподавателям и
                профессорам, которые хотят быть в курсе актуальных трендов на рынке труда и
                адаптировать свои программы под требования работодателей. Я составила список
                гипотез, в которых описала основные потребности пользователей и функциональность
                сервиса. Все эти гипотезы нужно проверить с помощью глубинных интервью с
                руководителями образовательных программ.
              </DetailsFrame.Container.Text>
              <DetailsFrame.Container.Gap size={24} />
              <DetailsFrame.Container.Gallery images={[analyticsImg1, analyticsImg2]} />
            </DetailsFrame.Container>
          </DetailsFrame>

          <DetailsFrame>
            <DetailsFrame.Container>
              <DetailsFrame.Container.Title size={ETitleSize.H3}>
                Глубинное интервью
              </DetailsFrame.Container.Title>
              <DetailsFrame.Container.Text>
                После определения целевой аудитории я обратилась к руководителям образовательных
                программ. Целью интервью было понять потребности и ожидания руководителей
                образовательных программ от сервиса персональной аналитики биржи труда, а также
                подтвердить или опровергнуть выдвинутые гипотезы. Интервью помогло мне определить
                потребности будущих пользователей сервиса.
              </DetailsFrame.Container.Text>
              <DetailsFrame.Container.Gap size={24} />
              <DetailsFrame.Container.Table table={interviewTableData} isRos />
            </DetailsFrame.Container>
          </DetailsFrame>

          <DetailsFrame>
            <DetailsFrame.Container>
              <DetailsFrame.Container.Title size={ETitleSize.H3}>
                CJM и информационная архитектура
              </DetailsFrame.Container.Title>
              <DetailsFrame.Container.Text>
                После интервью я создала персону, руководителя образовательной программы, которая
                хочет понять, какие навыки востребованы на рынке труда. Я описала ее путь по сервису
                в CJM. Затем я начала проектирование сервиса на основе технического задания. Я
                создала информационную архитектуру, в которой описала разделы сервиса и выделив
                основные сущности. На основе полученных данных я разработала user flow, то есть
                последовательность действий пользователя в сервисе. Также я спроектировала работу
                администратора. Результаты моих исследований можно посмотреть здесь.{' '}
                {/* @ts-ignore */}
                <DetailsFrame.Container.Text.Link
                  href={
                    'https://www.figma.com/design/8sI37E1TtaMw2uVqcWKvlP/%D0%A0%D0%BE%D1%81%D0%BD%D0%B0%D0%B2%D1%8B%D0%BA.-%D0%A3%D1%81%D0%BB%D1%83%D0%B3%D0%B8-%D0%B8-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5?node-id=1-1145&t=oA4DHDc0ACYGSOh1-1'
                  }
                >
                  Результаты моих исследований можно посмотреть здесь.
                </DetailsFrame.Container.Text.Link>
              </DetailsFrame.Container.Text>
              <DetailsFrame.Container.Gap size={24} />
              <DetailsFrame.Container.Gallery images={[cjmImg1, cjmImg2, cjmImg3]} />
            </DetailsFrame.Container>
          </DetailsFrame>

          <DetailsFrame>
            <DetailsFrame.Container>
              <DetailsFrame.Container.Title size={ETitleSize.H3}>
                Дизайн для пользователя
              </DetailsFrame.Container.Title>
              <DetailsFrame.Container.Text>
                При создании дизайна я использовала готовые компоненты дизайн-системы. Я создала
                дизайн личного кабинета пользователя, где отображатся список последних запросов на
                данные и услуги. Также я создала форму запроса данных, где можно выбрать профессию,
                данные, регион. На странице с услугами я описала все доступные функции, указала
                цены. Добавила возможность запросить услугу под заказ.
              </DetailsFrame.Container.Text>
              <DetailsFrame.Container.Gap size={24} />
              <DetailsFrame.Container.Gallery
                images={[userDesignImg1, userDesignImg2, userDesignImg3, userDesignImg4]}
              />
            </DetailsFrame.Container>
          </DetailsFrame>

          <DetailsFrame>
            <DetailsFrame.Container>
              <DetailsFrame.Container.Title size={ETitleSize.H3}>
                Дизайн для администратора
              </DetailsFrame.Container.Title>
              <DetailsFrame.Container.Text>
                Я также создала дизайн работы администратора. Он должен иметь возможность
                просматривать услуги и видеть запросы от пользователей, редактировать информацию об
                услугах и добавлять новые. Добавила форму поэтапной работы с услугой для каждого
                пользователя. Также организовала работу с пользователями, теперь их можно
                блокировать, смотреть запросы на данные и услуги, редактировать информацию.
              </DetailsFrame.Container.Text>
              <DetailsFrame.Container.Gap size={24} />
              <DetailsFrame.Container.Gallery
                images={[adminDesignImg1, adminDesignImg2, adminDesignImg3, adminDesignImg4]}
              />
            </DetailsFrame.Container>
          </DetailsFrame>

          <DetailsFrame>
            <DetailsFrame.Container>
              <DetailsFrame.Container.Title size={ETitleSize.H3}>
                Результаты
              </DetailsFrame.Container.Title>
              <DetailsFrame.Container.Text>
                Платформа стала важным инструментом для руководителей образовательных программ,
                помогая им принимать обоснованные решения о том, какие навыки нужно развивать у
                студентов, чтобы обеспечить их успешную трудоустройство. Мы смогли приблизиться к
                метрикам успеха благодаря работе всей команды. Сервис был представлен на конфереции
                для преподавателей и получил положительные отзывы.
              </DetailsFrame.Container.Text>
              <DetailsFrame.Container.Gap size={24} />
              <DetailsFrame.Container.MultiList tableData={resultMultiList} isImg />
            </DetailsFrame.Container>
          </DetailsFrame>

          <ProjectList />

          <Footer />
        </main>
      </div>
    </PageWrapper>
  );
};
