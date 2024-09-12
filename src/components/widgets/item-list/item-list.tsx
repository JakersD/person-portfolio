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
        {item.dates[1] ? `${item.dates[0]} - ${item.dates[1]}` : item.dates[0]}
      </Title>
      <div className={styles.info}>
        <Title className={styles.title} size={ETitleSize.H3}>
          {item.title}
        </Title>
        <Text className={styles.subtitle} theme={ETextTheme.SECOND}>
          {item.subtitle}
        </Text>
        {item.text && <Text className={styles.text}>{item.text}</Text>}
        {item.list && (
          <ul className={styles.list}>
            {item.list.map((text) => (
              <li className={styles.listItem}>
                <Text>{text}</Text>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  ));
};
