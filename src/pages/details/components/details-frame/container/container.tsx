import { FrameTitle } from './frame-title/frame-title';
import { FrameText } from './frame-text/frame-text';
import { FrameList } from './frame-list/frame-list';
import { ContainerView } from './container.view';

type TDetailsFrameFragment = typeof ContainerView & {
  Title: typeof FrameTitle;
  Text: typeof FrameText;
  List: typeof FrameList;
};

export const FrameFragment = ContainerView as TDetailsFrameFragment;

FrameFragment.Title = FrameTitle;
FrameFragment.Text = FrameText;
FrameFragment.List = FrameList;
