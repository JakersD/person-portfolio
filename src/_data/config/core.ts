import { IProject } from '@/_data/models/project';

export const getProjectList = (): IProject[] => [
  {
    id: 'x5',
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
  {
    id: 'project3',
    title: 'X5 Retail Group',
    dates: ['2022', '2023'],
    imgSrc: '/project-img.jpg',
    isOdd: true,
    role: 'Junior Product Designer',
  },
];
