import { TextFrameFragment } from './fragment';

interface ITextFrameProps {
  children: any;
}
const Root: React.FC<ITextFrameProps> = ({ children }) => <>{children}</>;

type TTextFrameFC = typeof Root & {
  Fragment: typeof TextFrameFragment;
};

export const TextFrame = Root as TTextFrameFC;
TextFrame.Fragment = TextFrameFragment;
