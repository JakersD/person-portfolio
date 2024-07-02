import React from 'react';

import styles from './result-graph.module.scss';
import { ETextSize, ETextTheme, Text } from '@components/shared';
import { useResize } from '@data/hooks';
import { GraphLG } from './graphs/lg';
import { GraphMD } from './graphs/md';
import { GraphSM } from './graphs/sm';
import { GraphFULL } from './graphs/full';

export const ResultGraph: React.FC = () => {
  const width = useResize();

  const renderGraph = () => {
    switch (true) {
      case width && width <= 1000:
        return <GraphLG />;
      case width && width <= 700:
        return <GraphMD />;
      case width && width <= 400:
        return <GraphSM />;
      default:
        return <GraphFULL />;
    }
  };

  return (
    <div className={styles.graph}>
      <div className={styles.graphImg}>
        <svg width='100%' height='212' viewBox={`0 0 1065 212`}>
          {renderGraph()}
        </svg>

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
