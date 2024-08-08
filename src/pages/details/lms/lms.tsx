import { ETitleSize, PageWrapper } from '@components/shared';
import React from 'react';
import { hypothesisMultiList, resultMultiList } from './config';

import styles from './lms.module.scss';
import { Footer, ProjectList, ShortHeaderWidget } from '@components/widgets';
import { DetailsFrame } from '../components';

import globeSceletalIcon from '@assets/icons/globe-skeletal.svg';

import mainImg from '@assets/lms/main-full.webp';
import schemaImg from '@assets/lms/schema.webp';

import interviewImg1 from '@assets/lms/interview1.webp';
import interviewImg2 from '@assets/lms/interview2.webp';
import interviewImg3 from '@assets/lms/interview3.webp';
import interviewImg4 from '@assets/lms/interview4.webp';
import interviewImg5 from '@assets/lms/interview5.webp';
import interviewImg6 from '@assets/lms/interview6.webp';

import resultDesignImg1 from '@assets/lms/result-design1.webp';
import resultDesignImg2 from '@assets/lms/result-design2.webp';
import resultDesignImg3 from '@assets/lms/result-design3.webp';
import resultDesignImg4 from '@assets/lms/result-design4.webp';
import resultDesignImg5 from '@assets/lms/result-design5.webp';

export const LmsDetails: React.FC = () => {
  return (
    <PageWrapper>
      <div className={styles.wrapper}>
        <ShortHeaderWidget />
        <main className={styles.main}>
          <DetailsFrame>
            <DetailsFrame.Container>
              <DetailsFrame.Container.Header
                title='Образовательная платформа Data-Diving'
                subtitle='Product Designer | 2023'
                links={[
                  {
                    icon: globeSceletalIcon,
                    link: 'https://data-diving.ru/',
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
                LMS платформа для онлайн-курсов образовательной организации Data-Diving. Проблемой
                продукта было отсутствие централизованного управления системой. Для улучшения работы
                системы решено было разработать админ панель, что и стало моей задачей.
              </DetailsFrame.Container.Text>
            </DetailsFrame.Container>
            <DetailsFrame.Container>
              <DetailsFrame.Container.Title>Цели продукта</DetailsFrame.Container.Title>
              <DetailsFrame.Container.List
                list={[
                  'Упростить управление системой.',
                  'Обеспечить более эффективный контроль над учебным процессом.',
                  'Улучшить коммуникацию между преподавателями и администрацией.',
                  'Повысить безопасность и стабильность системы.',
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
                В процесса работы над созданием админ-панели я:
              </DetailsFrame.Container.Text>

              <DetailsFrame.Container.Gap size={12} />

              <DetailsFrame.Container.List
                list={[
                  'Ознакомилась с техническим заданием, чтобы определить основные функции админ панели.',
                  'Разработала схему user flow, которая логически описывает взаимодействие пользователя с админ панелью. Организовала контент и функционал в логичную структуру, чтобы сделать ее удобной для пользователя.',
                  'Создала интерактивный прототип в фигма для тестирования работы админ-панели.',
                  'Провела тестирование с респондентами на прототипе для выявления проблем. Внесла изменения на основе полученных данных.',
                  'Финальный дизайн. Запуск и мониторинг.',
                ]}
              />
            </DetailsFrame.Container>
            <DetailsFrame.Container>
              <DetailsFrame.Container.Gallery images={[schemaImg]} />
            </DetailsFrame.Container>
          </DetailsFrame>

          <DetailsFrame>
            <DetailsFrame.Container>
              <DetailsFrame.Container.Title size={ETitleSize.H3}>
                Гипотезы
              </DetailsFrame.Container.Title>
              <DetailsFrame.Container.Text>
                Изначальная версия дизайна была сделана в соответствии с техническим заданием. После
                создания прототипа я самостоятельно прошла путь пользователя в админ панели,
                используя прототип дизайна. Я проверила, насколько понятно и легко найти необходимые
                разделы, создала организацию, добавила пользователя, добавила курс. Во время
                использования прототипа я обращала внимание на моменты, которые казались неудобными,
                сложными или непонятными. Выявленные проблемы я перевела в гипотезы, которые можно
                было бы проверить в ходе тестирования с реальными пользователями:
              </DetailsFrame.Container.Text>
            </DetailsFrame.Container>
            <DetailsFrame.Container>
              <DetailsFrame.Container.MultiList tableData={hypothesisMultiList} />
            </DetailsFrame.Container>
          </DetailsFrame>

          <DetailsFrame>
            <DetailsFrame.Container>
              <DetailsFrame.Container.Title size={ETitleSize.H3}>
                Интервью и небольшие улучшения
              </DetailsFrame.Container.Title>
              <DetailsFrame.Container.Text>
                Для подтверждения гипотез о возможных ошибках, а также для выявления новых, решено
                было провести интервью с респондентами. В процессе каждый участник выполнял заданные
                сценарии, вслух озвучивая свои действия и мысли. Я как наблюдатель записывавала все
                действия пользователя, затруднения, возникшие вопросы, комментарии. Участники должны
                были пройти следуюшие сценарии:
              </DetailsFrame.Container.Text>

              <DetailsFrame.Container.Gap size={12} />

              <DetailsFrame.Container.List
                list={[
                  'Создать новую организацию. Найти ее на странице организаций, и отредактировать информацию о ней.',
                  'Добавить нового пользователя вручную. Назначить ему роль и прикрепить к организации.',
                  'Найти пользователя в списке пользователей, и удалить его.',
                  'Объединить пользователей в группу',
                  'Создать курс. Добавить информацию о нем.',
                  'Добавить доступ к курсу для другой организации, а затем удалить доступ.',
                ]}
              />

              <DetailsFrame.Container.Gap size={12} />

              <DetailsFrame.Container.Text>
                После анализа повторяющихся проблем, возникающих у пользователей, я внесла некоторые
                изменения в дизайн админ-панели. Это позволило улучшить работу с системой и сделать
                ее более удобной.
              </DetailsFrame.Container.Text>
            </DetailsFrame.Container>
            <DetailsFrame.Container>
              <DetailsFrame.Container.Gallery
                images={[
                  interviewImg1,
                  interviewImg2,
                  interviewImg3,
                  interviewImg4,
                  interviewImg5,
                  interviewImg6,
                ]}
              />
            </DetailsFrame.Container>
          </DetailsFrame>

          <DetailsFrame>
            <DetailsFrame.Container>
              <DetailsFrame.Container.Title size={ETitleSize.H3}>
                Итоговый дизайн
              </DetailsFrame.Container.Title>
              <DetailsFrame.Container.Text>
                Дизайн админ панели создавался поэтапно, с постоянной обратной связью от
                пользователей, чтобы лучше понимать нужды будущих пользователей. В результате
                получился простой и эффективный дизайн, ориентированный на основные задачи
                администратора. Он позволяет быстро найти нужную информацию, управлять курсами и
                пользователями, создавать новые курсы, формировать группы, назначать тьюторов.
              </DetailsFrame.Container.Text>
            </DetailsFrame.Container>
            <DetailsFrame.Container>
              <DetailsFrame.Container.Gallery
                images={[
                  resultDesignImg1,
                  resultDesignImg2,
                  resultDesignImg3,
                  resultDesignImg4,
                  resultDesignImg5,
                ]}
              />
            </DetailsFrame.Container>
          </DetailsFrame>

          <DetailsFrame>
            <DetailsFrame.Container>
              <DetailsFrame.Container.Title size={ETitleSize.H3}>
                Результаты
              </DetailsFrame.Container.Title>
              <DetailsFrame.Container.Text>
                Реализация админ-панели стала значимым этапом в развитии LMS-системы. Заказчик
                высоко оценил результат нашей работы, подчеркнув полное соответствие дизайна всем
                поставленным требованиям и эффективное выполнение его функций. Мы не остановились на
                достигнутом и продолжили работу над LMS-системой, добавляя новые функции и улучшая
                существующие. Это позволило нам создать действительно универсальный и гибкий
                инструмент для организации онлайн-обучения.
              </DetailsFrame.Container.Text>
            </DetailsFrame.Container>
            <DetailsFrame.Container>
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
