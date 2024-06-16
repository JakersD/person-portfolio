import { FrameTitle } from './frame-title/frame-title';
import { FrameText } from './frame-text/frame-text';
import { FrameList } from './frame-list/frame-list';
import { FrameHeader } from './frame-header';
import { ContainerView } from './container.view';
import { FrameMultiList } from './frame-multi-list/frame-multi-list';
import { FrameGallery } from './frame-image';
import { FrameTable } from './frame-table';
import { FrameGap } from './frame-gap';

type TDetailsFrameFragment = typeof ContainerView & {
  Title: typeof FrameTitle;
  Text: typeof FrameText;
  List: typeof FrameList;
  Header: typeof FrameHeader;
  Gallery: typeof FrameGallery;
  Table: typeof FrameTable;
  Gap: typeof FrameGap;
  MultiList: typeof FrameMultiList;
};

export const FrameFragment = ContainerView as TDetailsFrameFragment;

FrameFragment.Title = FrameTitle;
FrameFragment.Text = FrameText;
FrameFragment.List = FrameList;
FrameFragment.MultiList = FrameMultiList;
FrameFragment.Header = FrameHeader;
FrameFragment.Gallery = FrameGallery;
FrameFragment.Table = FrameTable;
FrameFragment.Gap = FrameGap;
