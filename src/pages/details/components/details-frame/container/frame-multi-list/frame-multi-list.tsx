import React from 'react';

import styles from './frame-multi-list.module.scss';

import { ListInfoBlock } from '@components/shared/blocks/list-info-block';
import { getUniqueKey } from '@data/utils/core';
import { ETextSize, ETextTheme, Text } from '@components/shared';

interface IProp {
  tableData: Array<{
    url?: string;
    text: string;
  }>;
  isImg?: boolean;
}

export const FrameMultiList: React.FC<IProp> = ({ tableData, isImg }) => (
  <div className={isImg ? styles.imgGrid : styles.grid}>
    {tableData.map((item, i) => (
      <ListInfoBlock key={getUniqueKey(item.text, i)}>
        {item.url && <img src={item.url} className={styles.img} alt='Тематическая иконка' />}

        <Text size={ETextSize.SM} theme={ETextTheme.BLACK}>
          {item.text}
        </Text>
      </ListInfoBlock>
    ))}
  </div>
);
