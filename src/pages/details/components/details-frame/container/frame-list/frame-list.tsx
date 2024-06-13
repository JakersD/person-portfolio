import React from 'react';

import { getUniqueKey } from '@data/utils/core';
import { Text } from '@components/shared/text/text';

import styles from './frame-list.module.scss';

interface IProps {
  list: string[];
}

export const FrameList: React.FC<IProps> = ({ list }) => {
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
