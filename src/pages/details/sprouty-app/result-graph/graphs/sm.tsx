import React from 'react';

import styles from '../result-graph.module.scss';

export const GraphSM: React.FC = () => (
  <>
    <path
      opacity='0.3'
      d='M163.5 115L92.8234 139.917L20.7016 166.745L0 175H329V0L286 12L248.5 42L189 104.5L163.5 115Z'
      fill='url(#paint0_linear_93_3268)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_93_3268'
        x1='165.126'
        y1='92.8656'
        x2='170.301'
        y2='180.708'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#1859E7' />
        <stop offset='1' stopColor='#1859E7' stopOpacity='0' />
      </linearGradient>
    </defs>
    <path
      d='M2.69629 173L22.2888 167.225L94.6476 140.827L166 115L187.97 105.092C190.302 104.04 192.41 102.551 194.181 100.706L249.453 43.0919C250.15 42.365 250.901 41.6918 251.7 41.0782L286.436 14.3893C288.722 12.6333 291.36 11.3921 294.17 10.7505L330.305 2.5'
      stroke='#1859E7'
      strokeWidth='5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />

    <g transform='translate(100, 192)'>
      <text x='-10' y='-8' fill='#1d5deb' className={styles.svg_text}>
        2,000
      </text>
      <circle cx='6' cy='6' r='6' fill='white' stroke='#6595FF' strokeWidth='4' />
    </g>

    <g transform='translate(550, 116)'>
      <text x='-10' y='-8' fill='#1d5deb' className={styles.svg_text}>
        6,000
      </text>
      <circle cx='6' cy='6' r='6' fill='white' stroke='#6595FF' strokeWidth='4' />
    </g>

    <g transform='translate(770, 30)'>
      <text x='-24' y='-7' fill='#1d5deb' className={styles.svg_text__bold}>
        10,000
      </text>
      <circle cx='6' cy='6' r='6' fill='white' stroke='#6595FF' strokeWidth='4' />
    </g>
  </>
);
