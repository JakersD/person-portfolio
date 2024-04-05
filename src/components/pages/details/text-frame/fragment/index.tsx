import React from 'react';

import { TextFrameTitle } from './text-frame-title';
import { TextFrameText } from './text-frame-text';
import { TextFrameList } from './text-frame-list';

import styles from './fragment.module.scss';

interface IFragmentProps {
  end?: boolean;
  children: any;
}

const FragmentRoot: React.FC<IFragmentProps> = ({ end, children }) => (
  <div className={end ? styles.endFragment : styles.fragment}>{children}</div>
);

type TTextFrameFragment = typeof FragmentRoot & {
  Title: typeof TextFrameTitle;
  Text: typeof TextFrameText;
  List: typeof TextFrameList;
};

export const TextFrameFragment = FragmentRoot as TTextFrameFragment;

TextFrameFragment.Title = TextFrameTitle;
TextFrameFragment.Text = TextFrameText;
TextFrameFragment.List = TextFrameList;
