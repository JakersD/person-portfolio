import React from 'react';

import { ETextTheme, ETitleSize, IItem, Text, Title } from '@components/shared';
import { getUniqueKey } from '@data/utils/core';

import styles from './item-list.module.scss';

interface IProps {
  items: IItem[];
}

export const ItemList: React.FC<IProps> = ({ items }) => {
  return items.map((item, i) => (
    <div className={styles.item} key={getUniqueKey(item.title, i)}>
      <Title className={styles.date} size={ETitleSize.H4}>
        {`${item.dates[0]} - ${item.dates[1] || 'now'}`}
      </Title>
      <div className={styles.info}>
        <Title className={styles.title} size={ETitleSize.H3}>
          {item.title}
        </Title>
        <Text className={styles.subtitle} theme={ETextTheme.SECOND}>
          {item.subtitle}
        </Text>
        <Text className={styles.text}>{item.text}</Text>
      </div>
    </div>
  ));
};
