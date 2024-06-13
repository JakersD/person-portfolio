import React from 'react';

import styles from './frame-multi-list.module.scss';

import { ListInfoBlock } from '@components/shared/blocks/list-info-block';
import { getUniqueKey } from '@data/utils/core';
import { ETextSize, ETextTheme, Text } from '@components/shared';

interface IData {
  url?: string;
  text: string;
}
interface IProp {
  data: Array<IData>;
  isImg?: boolean;
}

export const FrameMultiList: React.FC<IProp> = ({ data, isImg }) => {
  const renderList = () => {
    return data.map((item, i) => (
      <ListInfoBlock key={getUniqueKey(item.text, i)}>
        {item.url && <img src={item.url} className={styles.img} alt='Тематическая иконка' />}
        {
          <Text size={ETextSize.SM} theme={ETextTheme.BLACK}>
            {item.text}
          </Text>
        }
      </ListInfoBlock>
    ));
  };

  return <div className={isImg ? styles.imgGrid : styles.grid}>{renderList()}</div>;
};
