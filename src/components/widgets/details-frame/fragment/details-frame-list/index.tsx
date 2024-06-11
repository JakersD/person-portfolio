import React from 'react';

import styles from './details-frame-list.module.scss';
import { getUniqueKey } from '@data/utils/core';
import { Text } from '@components/shared/text/text';

interface IProps {
  list: string[];
}

export const DetailsFrameList: React.FC<IProps> = ({ list }) => {
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
