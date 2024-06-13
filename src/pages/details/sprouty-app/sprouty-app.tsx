import React from 'react';

import { ShortHeaderWidget } from '@components/widgets/header/short-header';
import { ETitleSize } from '@components/shared/model';
import { Footer } from '@components/widgets/footer/footer';
import { Wrapper } from '@components/shared';
import { BackBtn } from '../components/back-btn/back-btn';
import { DetailsTitle } from '../components/details-title';
import { DetailsFrame } from '../components/details-frame/details-frame';

import styles from './sprouty-app.module.scss';

export const SproutyApp: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <ShortHeaderWidget />
      <main className={styles.main}>
        <Wrapper>
          <BackBtn className={styles.back} />
          <DetailsTitle
            title='Скачки роста. Мобильное приложение'
            subtitle='Стажер UI/UX дизайнер | 2022-2023'
          />
          <DetailsFrame>
            <DetailsFrame.Container>
              <DetailsFrame.Container.Title size={ETitleSize.H3}>Продукт</DetailsFrame.Container.Title>
              <DetailsFrame.Container.Text>
                Скачки роста - мобильное приложение, предназначенное для молодых родителей. При помощи
                приложения можно получать советы и рекомендации по питанию, режиму сна, обучению и развитию
                детей до года. У приложения есть бесплатная версия и расширенная версия по подписке. Подписка
                дает пользователям более персонализированный опыт, например, комплексы упражнений на каждый
                день.
              </DetailsFrame.Container.Text>
            </DetailsFrame.Container>

            <DetailsFrame.Container>
              <DetailsFrame.Container.Title>Цели продукта</DetailsFrame.Container.Title>
              <DetailsFrame.Container.List
                list={[
                  'Увеличить количество пользователей, создав новый востребованный функционал',
                  'Увеличить количество проданных подписок',
                  'Доработать существующий функционал продукта',
                  'Выявить недоработки и понять, почему люди перестают пользоваться приложением',
                ]}
              />
            </DetailsFrame.Container>

            <DetailsFrame.Container end>
              <DetailsFrame.Container.Title>Моя роль и задачи</DetailsFrame.Container.Title>
              <DetailsFrame.Container.Text margin>
                Я занималась доработкой существующего функционала приложения и добавлений новых функций. Когда
                я начала работу с командой, уже был создан стиль приложения и основные компоненты UI-Kita. По
                ходу работы много общалась с владельцем продукта, вместе с которым проводили исследования с
                аудиторией и строили гипотезы. В мои задачи входило:
              </DetailsFrame.Container.Text>
              <DetailsFrame.Container.List
                list={[
                  'Взаимодействие с владельцем продукта, лид дизайнером, аналитиками и разработчиками',
                  'Конкурентный анализ и выявление востребованных пользователями фичей',
                  'Формирование гипотез',
                  'Проектирование нового флоу',
                  'Отрисовка финальных макетов',
                  'Проведение коридорных исследований и тестирование макетов',
                ]}
              />
            </DetailsFrame.Container>

            <DetailsFrame.Container>
              <DetailsFrame.Container.Title size={ETitleSize.H3}>Процесс работы</DetailsFrame.Container.Title>
              <DetailsFrame.Container.Text>
                Я начала работу с постановки задачи совместно с владельцем продукта. Проблемой приложения
                являлось низкое количество пользователей. Согласно проведенным исследованиям, пользователи
                уходили к конкурентам с более широким функционалом. Моей задачей стало выявление функций у
                конкурентов, которые интересовали пользователей. Нужно было доработать приложение, привлечь
                пользователей обновленным функционалом и увеличить количество проданных подписок.
              </DetailsFrame.Container.Text>
            </DetailsFrame.Container>

            <DetailsFrame.Container>
              <DetailsFrame.Container.Title>Конкурентный анализ</DetailsFrame.Container.Title>
              <DetailsFrame.Container.Text margin>
                Я проанализировала аналогичные сервисы, которые закрывали потребности нашей аудитории (прямых
                конкурентов). Затем выделила косвенных конкурентов, которые предлагали схожие решения. Таким
                образом я хотела понять:
              </DetailsFrame.Container.Text>
              <DetailsFrame.Container.List
                list={[
                  'Какие функции должны быть у нашего продукта (обязательные, дополнительные)?',
                  'Что есть у более успешных конкурентов, чего нет у нас?',
                ]}
              />
            </DetailsFrame.Container>

            <DetailsFrame.Container>
              <DetailsFrame.Container.Title>Составление гипотез</DetailsFrame.Container.Title>
              <DetailsFrame.Container.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </DetailsFrame.Container.Text>
            </DetailsFrame.Container>

            <DetailsFrame.Container>
              <DetailsFrame.Container.Title>Проектирование нового флоу</DetailsFrame.Container.Title>
              <DetailsFrame.Container.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </DetailsFrame.Container.Text>
            </DetailsFrame.Container>

            <DetailsFrame.Container end>
              <DetailsFrame.Container.Title>Тестирование макетов</DetailsFrame.Container.Title>
              <DetailsFrame.Container.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </DetailsFrame.Container.Text>
            </DetailsFrame.Container>

            <DetailsFrame.Container>
              <DetailsFrame.Container.Title size={ETitleSize.H3}>Итоги</DetailsFrame.Container.Title>
              <DetailsFrame.Container.Text>
                Проблемой приложения явлолось низкое количество пользователей. Согласно проведенным
                исследованиям, пользователи уходили к конкурентам с более широким функционалом. Моей задачей
                стало выявление особенностей у конкурентов, которые привлекали бы пользователей. Нужно было
                доработать приложение, привлечь пользователей бесплатным функционалом и увеличить количество
                проданных подписок.
              </DetailsFrame.Container.Text>
            </DetailsFrame.Container>
          </DetailsFrame>
        </Wrapper>

        {/* <ProjectList /> */}

        <Footer />
      </main>
    </div>
  );
};
