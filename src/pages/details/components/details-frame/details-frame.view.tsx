import { Wrapper } from '@components/shared';

interface IDetailsFrameProps {
  children: any;
}

export const DetailsFrameView: React.FC<IDetailsFrameProps> = ({ children }) => <Wrapper>{children}</Wrapper>;
