import React from 'react';

import { ETitleSize, MainBlock } from '@/components/shared';
import { BackBtn, ProjectList } from '@/components/common';
import { FooterWidget } from '@/components/common';

import 'swiper/scss';
import 'swiper/scss/navigation';

import styles from './page.module.scss';
import { DetailsTitle, TextFrame } from '@/components/pages/details';
import { ShortHeaderWidget } from '@/components/common/header/short-header';

export default function SproutyApp() {
  return (
    <div className={styles.wrapper}>
      <ShortHeaderWidget />
      <main className={styles.main}>
        <MainBlock>
          <BackBtn className={styles.back} />
          <DetailsTitle
            title='Скачки роста. Мобильное приложение'
            subtitle='Стажер UI/UX дизайнер | 2022-2023'
          />
          <TextFrame>
            <TextFrame.Fragment>
              <TextFrame.Fragment.Title size={ETitleSize.H3}>Продукт</TextFrame.Fragment.Title>
              <TextFrame.Fragment.Text>
                Скачки роста - мобильное приложение, предназначенное для молодых родителей. При помощи
                приложения можно получать советы и рекомендации по питанию, режиму сна, обучению и развитию
                детей до года. У приложения есть бесплатная версия и расширенная версия по подписке. Подписка
                дает пользователям более персонализированный опыт, например, комплексы упражнений на каждый
                день.
              </TextFrame.Fragment.Text>
            </TextFrame.Fragment>

            <TextFrame.Fragment>
              <TextFrame.Fragment.Title>Цели продукта</TextFrame.Fragment.Title>
              <TextFrame.Fragment.List
                list={[
                  'Увеличить количество пользователей, создав новый востребованный функционал',
                  'Увеличить количество проданных подписок',
                  'Доработать существующий функционал продукта',
                  'Выявить недоработки и понять, почему люди перестают пользоваться приложением',
                ]}
              />
            </TextFrame.Fragment>

            <TextFrame.Fragment end>
              <TextFrame.Fragment.Title>Моя роль и задачи</TextFrame.Fragment.Title>
              <TextFrame.Fragment.Text margin>
                Я занималась доработкой существующего функционала приложения и добавлений новых функций. Когда
                я начала работу с командой, уже был создан стиль приложения и основные компоненты UI-Kita. По
                ходу работы много общалась с владельцем продукта, вместе с которым проводили исследования с
                аудиторией и строили гипотезы. В мои задачи входило:
              </TextFrame.Fragment.Text>
              <TextFrame.Fragment.List
                list={[
                  'Взаимодействие с владельцем продукта, лид дизайнером, аналитиками и разработчиками',
                  'Конкурентный анализ и выявление востребованных пользователями фичей',
                  'Формирование гипотез',
                  'Проектирование нового флоу',
                  'Отрисовка финальных макетов',
                  'Проведение коридорных исследований и тестирование макетов',
                ]}
              />
            </TextFrame.Fragment>

            <TextFrame.Fragment>
              <TextFrame.Fragment.Title size={ETitleSize.H3}>Процесс работы</TextFrame.Fragment.Title>
              <TextFrame.Fragment.Text>
                Я начала работу с постановки задачи совместно с владельцем продукта. Проблемой приложения
                являлось низкое количество пользователей. Согласно проведенным исследованиям, пользователи
                уходили к конкурентам с более широким функционалом. Моей задачей стало выявление функций у
                конкурентов, которые интересовали пользователей. Нужно было доработать приложение, привлечь
                пользователей обновленным функционалом и увеличить количество проданных подписок.
              </TextFrame.Fragment.Text>
            </TextFrame.Fragment>

            <TextFrame.Fragment>
              <TextFrame.Fragment.Title>Конкурентный анализ</TextFrame.Fragment.Title>
              <TextFrame.Fragment.Text margin>
                Я проанализировала аналогичные сервисы, которые закрывали потребности нашей аудитории (прямых
                конкурентов). Затем выделила косвенных конкурентов, которые предлагали схожие решения. Таким
                образом я хотела понять:
              </TextFrame.Fragment.Text>
              <TextFrame.Fragment.List
                list={[
                  'Какие функции должны быть у нашего продукта (обязательные, дополнительные)?',
                  'Что есть у более успешных конкурентов, чего нет у нас?',
                ]}
              />
            </TextFrame.Fragment>

            <TextFrame.Fragment>
              <TextFrame.Fragment.Title>Составление гипотез</TextFrame.Fragment.Title>
              <TextFrame.Fragment.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </TextFrame.Fragment.Text>
            </TextFrame.Fragment>

            <TextFrame.Fragment>
              <TextFrame.Fragment.Title>Проектирование нового флоу</TextFrame.Fragment.Title>
              <TextFrame.Fragment.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </TextFrame.Fragment.Text>
            </TextFrame.Fragment>

            <TextFrame.Fragment end>
              <TextFrame.Fragment.Title>Тестирование макетов</TextFrame.Fragment.Title>
              <TextFrame.Fragment.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </TextFrame.Fragment.Text>
            </TextFrame.Fragment>

            <TextFrame.Fragment>
              <TextFrame.Fragment.Title size={ETitleSize.H3}>Итоги</TextFrame.Fragment.Title>
              <TextFrame.Fragment.Text>
                Проблемой приложения явлолось низкое количество пользователей. Согласно проведенным
                исследованиям, пользователи уходили к конкурентам с более широким функционалом. Моей задачей
                стало выявление особенностей у конкурентов, которые привлекали бы пользователей. Нужно было
                доработать приложение, привлечь пользователей бесплатным функционалом и увеличить количество
                проданных подписок.
              </TextFrame.Fragment.Text>
            </TextFrame.Fragment>
          </TextFrame>
        </MainBlock>

        <ProjectList />

        <FooterWidget />
      </main>
    </div>
  );
}
