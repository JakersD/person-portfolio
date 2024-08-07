import React from 'react';

import { Footer } from '@components/widgets/footer/footer';
import { ETitleSize, PageWrapper } from '@components/shared';

import styles from './sprouty-app.module.scss';
import { ProjectList, ShortHeaderWidget } from '@components/widgets';

import appleSkeletal from '@assets/icons/apple-skeletal.svg';
import googlePlaySkeletal from '@assets/icons/google-play-skeletal.svg';

import main1 from '@assets/sprouty-app/main1.webp';

import process1 from '@assets/sprouty-app/process1.webp';
import process2 from '@assets/sprouty-app/process2.webp';
import process3 from '@assets/sprouty-app/process3.webp';
import process4 from '@assets/sprouty-app/process4.webp';

import additional1 from '@assets/sprouty-app/additional1.webp';
import additional2 from '@assets/sprouty-app/additional2.webp';
import additional3 from '@assets/sprouty-app/additional3.webp';

import games1 from '@assets/sprouty-app/games1.webp';

import calendar1 from '@assets/sprouty-app/calendar1.webp';
import calendar2 from '@assets/sprouty-app/calendar2.webp';

import tracker1 from '@assets/sprouty-app/tracker1.webp';
import tracker2 from '@assets/sprouty-app/tracker2.webp';

// import lib1 from '@assets/sprouty-app/library1.webp';

// import results1 from '@assets/sprouty-app/results1.webp';

import { DetailsFrame } from '../components';
import {
  conclusionTableData,
  hypothesisTableData,
  interviewTableData,
  mobileInterviewDataTable,
} from './config';
import { ResultGraph } from './result-graph/result-graph';
import { ELinks } from '@data/config/links';
import { useResize } from '@data/hooks';
import { EScreenSize } from '@data/hooks/useResize';

export const SproutyApp: React.FC = () => {
  const screen = useResize();

  return (
    <PageWrapper>
      <div className={styles.wrapper}>
        <ShortHeaderWidget />
        <main className={styles.main}>
          {/* ЗАГОЛОВОК */}
          <DetailsFrame>
            <DetailsFrame.Container>
              <DetailsFrame.Container.Header
                title='Скачки роста. Мобильное приложение'
                subtitle='Стажер UI/UX дизайнер | 2021-2022'
                links={[
                  {
                    icon: appleSkeletal,
                    link: ELinks.SPROUTY_APP_APPLE,
                  },
                  {
                    icon: googlePlaySkeletal,
                    link: ELinks.SPROUTY_APP_GOOGLE,
                  },
                ]}
              />
            </DetailsFrame.Container>
            <DetailsFrame.Container.Gap size={8} />
            <DetailsFrame.Container>
              <DetailsFrame.Container.Gallery images={[main1]} />
            </DetailsFrame.Container>
          </DetailsFrame>

          {/* ПРОДУКТ */}
          <DetailsFrame>
            <DetailsFrame.Container>
              <DetailsFrame.Container.Title size={ETitleSize.H3}>
                Продукт
              </DetailsFrame.Container.Title>
              <DetailsFrame.Container.Text>
                Скачки роста - мобильное приложение, предназначенное для молодых родителей. При
                помощи приложения можно получать советы и рекомендации по питанию, режиму сна,
                обучению и развитию детей до года.
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
            {/* <DetailsFrame.Container>
              <DetailsFrame.Container.Title>Моя роль и задачи</DetailsFrame.Container.Title>
              <DetailsFrame.Container.Text>
                Я занималась доработкой существующего функционала приложения и добавлением новых
                функций. Когда я начала работу с командой, уже был создан стиль приложения и
                основные компоненты UI-Kita. По ходу работы много общалась с владельцем продукта,
                вместе с которым проводили исследования с аудиторией и строили гипотезы. В мои
                задачи входило:
              </DetailsFrame.Container.Text>
              <DetailsFrame.Container.Gap size={12} />
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
            </DetailsFrame.Container> */}
          </DetailsFrame>

          {/* ПРОЦЕСС РАБОТЫ */}
          <DetailsFrame>
            <DetailsFrame.Container>
              <DetailsFrame.Container.Title size={ETitleSize.H3}>
                Процесс работы
              </DetailsFrame.Container.Title>
              <DetailsFrame.Container.Text>
                Я начала работу с постановки задачи совместно с владельцем продукта. Проблемой
                приложения являлось низкое количество пользователей, пользователи уходили к
                конкурентам с более широким функционалом. Для того, чтобы найти максимально
                эффективные и удобные для пользователей решения, я постаралась провести
                исследования:
              </DetailsFrame.Container.Text>
              <DetailsFrame.Container.Gap size={12} />
              <DetailsFrame.Container.List
                list={[
                  'Провести конкурентный анализ приложений со схожей тематикой',
                  'Составить гипотезы',
                  'Провести интервью с целевой аудиторией приложения',
                  'Сформировать Job Stores',
                ]}
              />
            </DetailsFrame.Container>
            <DetailsFrame.Container>
              <DetailsFrame.Container.Title>Бенчмаркинг</DetailsFrame.Container.Title>
              <DetailsFrame.Container.Text>
                Я проанализировала интерфейс 6 популярных мобильных приложений для отслеживания
                развития детей. В первую очередь я сравнивала основные функций приложений, такие как
                возможность ввода и отслеживания информации о росте, весе, питании, сне и развитии
                ребенка. Также выявляла преимущества и недостатки из отзывов пользователей для
                определения удовлетворенности пользователей и выявления проблем в функционировании
                приложения.
              </DetailsFrame.Container.Text>
              <DetailsFrame.Container.Gap size={24} />
              <DetailsFrame.Container.Gallery images={[process1, process2, process3, process4]} />
            </DetailsFrame.Container>
          </DetailsFrame>

          {/* ГИПОТЕЗЫ */}
          <DetailsFrame>
            <DetailsFrame.Container>
              <DetailsFrame.Container.Title size={ETitleSize.H3}>
                Гипотезы
              </DetailsFrame.Container.Title>
              <DetailsFrame.Container.Text>
                После конкурентного анализа был составлен список гипотез. Для того, чтобы проверить
                гипотезы, мы в ходе интервью решили опросить респондентов. Гипотеза считалась бы
                доказанной, если хотя бы 7/10 респондентов подтвердили бы ее. Предполагается, что
                пользователи, которые используют приложение, хотели бы:
              </DetailsFrame.Container.Text>
            </DetailsFrame.Container>
            <DetailsFrame.Container>
              <DetailsFrame.Container.MultiList tableData={hypothesisTableData} />
            </DetailsFrame.Container>
          </DetailsFrame>

          {/* ИНТЕРВЬЮ */}
          {screen !== EScreenSize.ULTRA_SM && screen !== EScreenSize.SM && (
            <DetailsFrame>
              <DetailsFrame.Container>
                <DetailsFrame.Container.Title size={ETitleSize.H3}>
                  Интервью
                </DetailsFrame.Container.Title>
                <DetailsFrame.Container.Text>
                  Для проверки гипотез я провела интервью с целевой аудиторией, создав список
                  вопросов, подбирая разнообразных участников и проводя интервью онлайн. В ходе
                  интервью я старалась задавать открытые вопросы, чтобы получить полные и
                  развернутые ответы. После проведения всех интервью я анализировала полученные
                  данные и делала выводы, проверяя свои гипотезы. Полученные результаты помогли нам
                  лучше понять потребности и предпочтения нашей целевой аудитории и внести
                  соответствующие изменения в продукт.
                </DetailsFrame.Container.Text>
              </DetailsFrame.Container>
              <DetailsFrame.Container>
                <DetailsFrame.Container.Table
                  table={interviewTableData}
                  mobileTable={mobileInterviewDataTable}
                />
              </DetailsFrame.Container>
            </DetailsFrame>
          )}

          {/* ВЫВОДЫ */}
          {screen !== EScreenSize.ULTRA_SM && screen !== EScreenSize.SM && (
            <DetailsFrame>
              <DetailsFrame.Container>
                <DetailsFrame.Container.Title>Выводы</DetailsFrame.Container.Title>
                <DetailsFrame.Container.Text>
                  В конечном итоге для разработки дизайна использовались следующие задачи на
                  проектирование на основе Job Stories:
                </DetailsFrame.Container.Text>
              </DetailsFrame.Container>
              <DetailsFrame.Container>
                <DetailsFrame.Container.MultiList tableData={conclusionTableData} isImg={true} />
              </DetailsFrame.Container>
            </DetailsFrame>
          )}

          {/* Главный экран */}
          <DetailsFrame>
            <DetailsFrame.Container>
              <DetailsFrame.Container.Title>Главный экран</DetailsFrame.Container.Title>
              <DetailsFrame.Container.Text>
                После этапа исследований было решено доработать функционал главного экрана
                приложения с информацией о развитии ребенка по неделям. Нужно было добавить
                возможность просматривать игры и упражнения, а также календарь с прогнозируемыми
                периодами кризисов. Чтобы улучшить навигацию в приложении, я сделала tab-bar, куда
                перенесла настройки (в которые в дальнейшем можно будет добавить информацию о
                подписке и обратную связь). Информацию на главной странице я дополнила и разделила
                по тематике. Затем добавила раздел с навыками, которые осваивает ребенок. Их можно
                отмечать, указывать дату и получать достижение, когда нывак был освоен. Также на
                главный экран был добавлен раздел с играми и упражнениями.
              </DetailsFrame.Container.Text>
            </DetailsFrame.Container>
            <DetailsFrame.Container>
              <DetailsFrame.Container.Gallery
                images={[additional1, additional2, additional3, games1, calendar1, calendar2]}
              />
            </DetailsFrame.Container>
          </DetailsFrame>

          {/* ИГРЫ */}
          {/* <DetailsFrame>
            <DetailsFrame.Container>
              <DetailsFrame.Container.Title size={ETitleSize.H3}>
                Игры и упражнения
              </DetailsFrame.Container.Title>
              <DetailsFrame.Container.Text>
                Также на главный экран был добавлен раздел с играми и упражнениями, развивающими
                детей. Упражнения меняются каждую неделю и подбираются по возрасту и развитию,
                согласно рекомендациям педиатра. Рекомендации по выполнению упражнений можно
                посмотреть в GIF формате и прочитать в описании. Все выполненные упражнения
                сохраняются, и их можно повторять.
              </DetailsFrame.Container.Text>
            </DetailsFrame.Container>
            <DetailsFrame.Container>
              <DetailsFrame.Container.Gallery images={[games1]} />
            </DetailsFrame.Container>
          </DetailsFrame> */}

          {/* КАЛЕНДАРЬ */}
          {/* <DetailsFrame>
            <DetailsFrame.Container>
              <DetailsFrame.Container.Title size={ETitleSize.H3}>
                Календарь и добавление событий
              </DetailsFrame.Container.Title>
              <DetailsFrame.Container.Text>
                Следующим этапом была разработка дизайна календаря с прогнозируемыми периодами
                кризисов, связанных с ростом ребенка. Так как основные скачки роста происходят не по
                дням, а по неделям, нужно было показывать события для каждой недели жизни ребенка.
                Для повышения удобства использования приложения была разработана легенда календаря,
                которая помогает пользователям лучше понять и интерпретировать цветовые обозначения
                периодов роста. Таким образом, пользователи могут легко узнать и отличить различные
                этапы роста своего малыша, что делает использование приложения более понятным и
                удобным. Также я добавила в календарь функцию отображения предстоящих событий.
                Родители могут добавлять навыки и заметки, чтобы отмечать важные события в жизни
                ребенка. В результате моей работы был создан удобный и информативный календарь,
                который помогает родителям следить за ростом своего ребенка.
              </DetailsFrame.Container.Text>
            </DetailsFrame.Container>
            <DetailsFrame.Container>
              <DetailsFrame.Container.Gallery images={[calendar1, calendar2]} />
            </DetailsFrame.Container>
          </DetailsFrame> */}

          {/* ТРЕКЕРЫ И СТАТИСТИКА */}
          <DetailsFrame>
            <DetailsFrame.Container>
              <DetailsFrame.Container.Title size={ETitleSize.H3}>
                Трекеры и статистика
              </DetailsFrame.Container.Title>
              <DetailsFrame.Container.Text>
                Процесс разработки дизайна для трекеров я начала с определения основных функций,
                которые должен выполнять этот компонент приложения. Например, ключевыми задачами
                трекера кормления стали:
              </DetailsFrame.Container.Text>
              <DetailsFrame.Container.Gap size={12} />
              <DetailsFrame.Container.List
                list={[
                  'Возможность записи информации о типе кормления (прикорм, кормление грудью, кормление смесью).',
                  'Возможность фиксации времени начала и окончания кормления, а также общей длительности.',
                  'Просмотр истории кормлений и предоставление статистики.',
                ]}
              />
              <DetailsFrame.Container.Gap size={12} />
              <DetailsFrame.Container.Text>
                Для начала я создала экран трекера кормления. Я учла возможность интеграции трекера
                кормления с другими трекерами, такими как трекер сна, настроения, сцеживания и
                подгузников. Всего было разработано пять различных трекеров, позволяющих родителям
                быстро выбрать нужную категорию.
              </DetailsFrame.Container.Text>
            </DetailsFrame.Container>
            {/* <DetailsFrame.Container>
              <DetailsFrame.Container.Text>
                На отдельном экране "История" пользователь может просматривать записи о прошедших
                кормлениях, включая информацию о типе, времени и длительности. По нажатию на кнопку
                “Статистика” отображается общая статистика по кормлениям за выбранный период.
              </DetailsFrame.Container.Text>
            </DetailsFrame.Container>
            <DetailsFrame.Container>
              <DetailsFrame.Container.Text>
                Также я учла возможность интеграции трекера кормления с другими трекерами, такими
                как трекер сна, настроения, сцеживания и подгузников. Это позволяло получать более
                полную картину состояния и режима дня ребенка. Всего было разработано пять различных
                трекеров, позволяющих родителям быстро выбрать нужную категорию.
              </DetailsFrame.Container.Text>
            </DetailsFrame.Container> */}
            <DetailsFrame.Container>
              <DetailsFrame.Container.Gallery images={[tracker1, tracker2]} />
            </DetailsFrame.Container>
          </DetailsFrame>

          {/* БИБЛИОТЕКА */}
          {/* <DetailsFrame>
            <DetailsFrame.Container>
              <DetailsFrame.Container.Title size={ETitleSize.H3}>
                Библиотека статей
              </DetailsFrame.Container.Title>
              <DetailsFrame.Container.Text>
                Также я разработала дизайн статей, которые были посвящены уходу, воспитанию и заботе
                о младенцах. Совместно с командой мы разработали четкую иерархию разделов, чтобы
                пользователи могли быстро найти статьи по интересующим их темам, таким как
                кормление, сон, развитие ребенка, первые месяцы жизни и т.д. Понимая, что родители
                будут читать статьи на ходу, я сделала простой и минималистичный дизайн страницы
                чтения. Крупный, легко читаемый шрифт, оптимальные межстрочные интервалы, удобная
                прокрутка и отсутствие лишних элементов. В конце каждой статьи родителям
                предлагается выполнить упражнения из списка.
              </DetailsFrame.Container.Text>
            </DetailsFrame.Container>
            <DetailsFrame.Container>
              <DetailsFrame.Container.Gallery images={[lib1]} />
            </DetailsFrame.Container>
          </DetailsFrame> */}

          {/* ИТОГИ */}
          {/* <DetailsFrame>
            <DetailsFrame.Container>
              <DetailsFrame.Container.Title size={ETitleSize.H3}>
                Итоги
              </DetailsFrame.Container.Title>
              <DetailsFrame.Container.Text>
                В процессе работы я также создала несколько других страниц, таких как настройки,
                экраны покупки подписки, выставления рейтинга приложения. Переработала дизайн входа
                в приложение, сделав его более гибким, удобным, и предусмотрев возможные проблемы.
                Также я добавила онбординг, объясняющий новым пользователям особенности приложения.
              </DetailsFrame.Container.Text>
            </DetailsFrame.Container>
            <DetailsFrame.Container>
              <DetailsFrame.Container.Gallery images={[results1]} />
            </DetailsFrame.Container>
          </DetailsFrame> */}

          {/* РЕЗУЛЬТАТЫ */}
          {screen === EScreenSize.FULL && (
            <DetailsFrame>
              <DetailsFrame.Container>
                <DetailsFrame.Container.Title size={ETitleSize.H3}>
                  Результаты
                </DetailsFrame.Container.Title>
                <DetailsFrame.Container.Text>
                  В процессе работы я также создала несколько других страниц, таких как настройки,
                  экраны покупки подписки, выставления рейтинга приложения. Переработала дизайн
                  входа в приложение, сделав его более гибким, удобным, и предусмотрев возможные
                  проблемы. Также я добавила онбординг, объясняющий новым пользователям особенности
                  приложения.
                </DetailsFrame.Container.Text>
              </DetailsFrame.Container>
              <DetailsFrame.Container>
                <DetailsFrame.Container.Text>
                  В результате обновления приложения и добавления новых функций, за год количество
                  скачиваний увеличилось в пять раз. Так же удалось увеличить количество проданных
                  подписок более чем на 20%. Пользователи стали чаще оставлять положительные
                  комментарии, а средняя оценка в App Store составила 4.8.
                </DetailsFrame.Container.Text>
              </DetailsFrame.Container>
              <DetailsFrame.Container>
                <ResultGraph />
              </DetailsFrame.Container>
            </DetailsFrame>
          )}

          <ProjectList />

          <Footer />
        </main>
      </div>
    </PageWrapper>
  );
};
