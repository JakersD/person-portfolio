import React from 'react';

import styles from './index.module.scss';
import { ListInfoBlock } from '@components/shared/blocks/list-info-block';
import { ETextSize, ETextTheme, Text } from '@components/shared';

interface IProps {
  table: string[][];
}

export const FrameTable: React.FC<IProps> = ({ table }) => {
  return (
    <div className={styles.table}>
      {table.map((row, i) => (
        <>
          {row.map((item, j) => (
            <ListInfoBlock className={i === 0 || j === 0 ? '' : styles.tableBody}>
              <Text size={ETextSize.SM} theme={ETextTheme.BLACK}>
                {item}
              </Text>
            </ListInfoBlock>
          ))}
        </>
      ))}
    </div>
  );
};
