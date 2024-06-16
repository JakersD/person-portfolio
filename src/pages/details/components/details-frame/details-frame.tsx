import { FrameFragment } from './container/container';
import { DetailsFrameView } from './details-frame.view';

type TDetailsFrameFC = typeof DetailsFrameView & {
  Container: typeof FrameFragment;
};

export const DetailsFrame = DetailsFrameView as TDetailsFrameFC;
DetailsFrame.Container = FrameFragment;
