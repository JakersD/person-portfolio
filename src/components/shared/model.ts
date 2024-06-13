export interface IItem {
  dates: [string, string];
  title: string;
  subtitle: string;
  text: string;
}

export enum ETextWeight {
  NORMAL = 'NORMAL',
  BOLD = 'BOLD',
}

export enum ETextSize {
  SM = 'SM',
  MD = 'MD',
}

export enum ETextTheme {
  GENERAL = 'GENERAL',
  SECOND = 'SECOND',
  BLACK = 'BLACK',
}

export enum ETitleSize {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

export enum EBtnTheme {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
}
