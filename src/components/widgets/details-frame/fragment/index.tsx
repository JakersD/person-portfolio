import React from 'react';

import styles from './fragment.module.scss';
import { DetailsFrameTitle } from './details-frame-title';
import { DetailsFrameText } from './details-frame-text';
import { DetailsFrameList } from './details-frame-list';

interface IFragmentProps {
  end?: boolean;
  children: any;
}

const FragmentRoot: React.FC<IFragmentProps> = ({ end, children }) => (
  <div className={end ? styles.endFragment : styles.fragment}>{children}</div>
);

type TDetailsFrameFragment = typeof FragmentRoot & {
  Title: typeof DetailsFrameTitle;
  Text: typeof DetailsFrameText;
  List: typeof DetailsFrameList;
};

export const DetailsFrameFragment = FragmentRoot as TDetailsFrameFragment;

DetailsFrameFragment.Title = DetailsFrameTitle;
DetailsFrameFragment.Text = DetailsFrameText;
DetailsFrameFragment.List = DetailsFrameList;
