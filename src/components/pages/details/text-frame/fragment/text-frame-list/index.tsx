import React from 'react';

import { Text } from '@/components/shared';

import styles from './text-frame-list.module.scss';

interface IProps {
  list: string[];
}

export const TextFrameList: React.FC<IProps> = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <li className={styles.item}>
          <Text>{item}</Text>
        </li>
      ))}
    </ul>
  );
};
