import React from 'react';

import styles from '../result-graph.module.scss';

export const GraphMD: React.FC = () => (
  <svg width='100%' height='175' viewBox={`0 0 512 175`}>
    <path
      opacity='0.3'
      d='M268.255 100.708L146.994 139.917L32.7828 166.745L0 175H521V0L484.692 5.7783L379.646 28.066L268.255 100.708Z'
      fill='url(#paint0_linear_93_2912)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_93_2912'
        x1='261.491'
        y1='92.8656'
        x2='264.766'
        y2='180.891'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#1859E7' />
        <stop offset='1' stopColor='#1859E7' stopOpacity='0' />
      </linearGradient>
    </defs>
    <path
      d='M3.10156 173L34.1281 167.225L148.715 140.827L268.427 102.485C270.172 101.926 271.833 101.13 273.361 100.119L378.318 30.683C380.364 29.3295 382.641 28.364 385.037 27.8346L457.922 11.7242L521.899 2.5'
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

    <g transform='translate(300, 165)'>
      <text x='-10' y='-8' fill='#1d5deb' className={styles.svg_text}>
        4,000
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
  </svg>
);
