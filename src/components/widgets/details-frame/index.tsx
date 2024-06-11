import { DetailsFrameFragment } from './fragment';

interface IDetailsFrameProps {
  children: any;
}
const Root: React.FC<IDetailsFrameProps> = ({ children }) => <>{children}</>;

type TDetailsFrameFC = typeof Root & {
  Fragment: typeof DetailsFrameFragment;
};

export const DetailsFrame = Root as TDetailsFrameFC;
DetailsFrame.Fragment = DetailsFrameFragment;
