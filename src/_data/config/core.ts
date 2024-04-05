import { IProject } from '@/_data/models/project';
import { IItem } from '@/components/shared';

export const getProjectList = (): IProject[] => [
  {
    id: 'sprouty-app',
    title: 'Скачки роста. Мобильное приложение',
    dates: ['2022', '2023'],
    imgSrc: '/project-img.jpg',
    role: 'Junior Product Designer',
  },
  {
    id: 'project',
    title: 'X5 Retail Group',
    dates: ['2022', '2023'],
    imgSrc: '/project-img.jpg',
    role: 'Junior Product Designer',
  },
  {
    id: 'project2',
    title: 'X5 Retail Group',
    dates: ['2022', '2023'],
    imgSrc: '/project-img.jpg',
    role: 'Junior Product Designer',
  },
];

export const getJobList = (): IItem[] => [
  {
    title: 'X5 Retail Group',
    subtitle: 'Junior Product Designer',
    text: 'В рамках спецификации современных стандартов, стремящиеся вытеснить традиционное производство, нанотехнологии смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности.',
    dates: ['2019', ''],
  },
  {
    title: 'X5 Retail Group',
    subtitle: 'Junior Product Designer',
    text: 'В рамках спецификации современных стандартов, стремящиеся вытеснить традиционное производство, нанотехнологии смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности.',
    dates: ['2018', '2019'],
  },
  {
    title: 'X5 Retail Group',
    subtitle: 'Junior Product Designer',
    text: 'В рамках спецификации современных стандартов, стремящиеся вытеснить традиционное производство, нанотехнологии смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности.',
    dates: ['2019', '2023'],
  },
  {
    title: 'X5 Retail Group',
    subtitle: 'Junior Product Designer',
    text: 'В рамках спецификации современных стандартов, стремящиеся вытеснить традиционное производство, нанотехнологии смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности.',
    dates: ['2019', '2222'],
  },
];

export const getEducationList = (): IItem[] => [
  {
    title: 'X5 Retail Group',
    subtitle: 'Junior Product Designer',
    text: 'В рамках спецификации современных стандартов, стремящиеся вытеснить традиционное производство, нанотехнологии смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности.',
    dates: ['2019', ''],
  },
  {
    title: 'X5 Retail Group',
    subtitle: 'Junior Product Designer',
    text: 'В рамках спецификации современных стандартов, стремящиеся вытеснить традиционное производство, нанотехнологии смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности.',
    dates: ['2019', ''],
  },
];
