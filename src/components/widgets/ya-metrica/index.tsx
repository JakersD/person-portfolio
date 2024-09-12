import React from 'react';
import { YMInitializer } from 'react-yandex-metrika';

const YM_COUNTER_ID = 98292839;

export const YandexMetricaContainer: React.FC = () => (
  <YMInitializer
    accounts={[YM_COUNTER_ID]}
    options={{
      defer: true,
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
    }}
    version='2'
  />
);
