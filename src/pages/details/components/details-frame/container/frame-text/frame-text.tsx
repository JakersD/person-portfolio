import { FrameTextLink } from './frame-text-link';
import { FrameTextView } from './frame-text-view';

type TDetailsFrameText = typeof FrameTextView & {
  Link?: typeof FrameTextView;
};

export const FrameText = FrameTextView as TDetailsFrameText;

FrameText.Link = FrameTextLink as any;
