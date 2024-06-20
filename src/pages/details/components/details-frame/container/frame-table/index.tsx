import React from 'react';

import styles from './index.module.scss';
import { ListInfoBlock } from '@components/shared/blocks/list-info-block';
import { ETextSize, ETextTheme, Text } from '@components/shared';
import { getUniqueKey } from '@data/utils/core';

interface IProps {
  table: string[][];
}

export const FrameTable: React.FC<IProps> = ({ table }) => {
  return (
    <div className={styles.table}>
      {table.map((row, i) => (
        <React.Fragment key={getUniqueKey(row[0], i)}>
          {row.map((item, j) => (
            <ListInfoBlock
              key={getUniqueKey(item, i + j)}
              className={i === 0 || j === 0 ? '' : styles.tableBody}
            >
              <Text size={ETextSize.SM} theme={ETextTheme.BLACK}>
                {item}
              </Text>
            </ListInfoBlock>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
