import React from 'react';

import graph from '@assets/sprouty-app/graph.svg';

import styles from './index.module.scss';
import { ETextSize, ETextTheme, Text } from '@components/shared';
import { combineStyles } from '@data/utils/core';

export const ResultGraph: React.FC = () => {
  return (
    <div className={styles.graph}>
      <div className={styles.graphImg}>
        <div className={styles.imgWrapper}>
          <img className={styles.img} src={graph} alt='График' />
          <div className={combineStyles([styles.graphDot, styles.dot1])}>
            <p>2,000</p>
            <div></div>
          </div>
          <div className={combineStyles([styles.graphDot, styles.dot2])}>
            <p>4,000</p>
            <div></div>
          </div>
          <div className={combineStyles([styles.graphDot, styles.dot3])}>
            <p>6,000</p>
            <div></div>
          </div>
          <div className={combineStyles([styles.graphDot, styles.dot4])}>
            <p>10,000</p>
            <div></div>
          </div>
        </div>

        <div className={styles.dates}>
          <Text size={ETextSize.SM} theme={ETextTheme.SECOND}>
            Янв, 2022
          </Text>
          <Text size={ETextSize.SM} theme={ETextTheme.SECOND}>
            Апр, 2022
          </Text>
          <Text size={ETextSize.SM} theme={ETextTheme.SECOND}>
            Авг, 2022
          </Text>
          <Text size={ETextSize.SM} theme={ETextTheme.SECOND}>
            Дек, 2022
          </Text>
          <Text size={ETextSize.SM} theme={ETextTheme.SECOND}>
            Фев, 2023
          </Text>
        </div>
      </div>
      <div className={styles.graphInfo}>
        <div className={styles.graphInfoText}>
          <p className={styles.infoQuestion}>Отзывов:</p>
          <p className={styles.infoAnswer}>959+</p>
        </div>
        <div className={styles.graphInfoText}>
          <p className={styles.infoQuestion}>Оценка:</p>
          <p className={styles.infoAnswer}>4,8</p>
        </div>
      </div>
    </div>
  );
};
