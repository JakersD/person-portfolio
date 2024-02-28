export interface IProject {
  id: string;
  title: string;
  role: string;
  imgSrc: string;
  isOdd?: boolean;
  dates: [string, string];
}
