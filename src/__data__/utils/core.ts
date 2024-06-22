import { IProject } from '@data/models/project';

export const getUniqueKey = (v: string, i: number) => `${v}+${i}`;

export const combineStyles = (styles: Array<string | undefined | null>): string =>
  styles.filter((v) => v).join(' ');

export const getProjectsExcludeId = (projectList: IProject[], id: string) =>
  projectList.filter((project) => project.id !== id);

export const getQueryFromUrl = (url: string) => url.split('/')[url.split('/').length - 1];
