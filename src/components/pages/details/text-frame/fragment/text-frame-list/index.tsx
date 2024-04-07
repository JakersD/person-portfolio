import React from 'react';

import { Text } from '@/components/shared';

import styles from './text-frame-list.module.scss';
import { getUniqueKey } from '@/_data';

interface IProps {
  list: string[];
}

export const TextFrameList: React.FC<IProps> = ({ list }) => {
  return (
    <ul>
      {list.map((item, i) => (
        <li className={styles.item} key={getUniqueKey(item, i)}>
          <Text>{item}</Text>
        </li>
      ))}
    </ul>
  );
};
