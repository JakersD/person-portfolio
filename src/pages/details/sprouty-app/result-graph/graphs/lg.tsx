import React from 'react';

import styles from '../result-graph.module.scss';

export const GraphLG: React.FC = () => (
  <svg width='100%' height='212' viewBox={`0 0 737 212`}>
    <path
      opacity='0.3'
      d='M379.47 122L207.936 169.5L46.3742 202L0 212H737V0L685.639 7L537.043 34L379.47 122Z'
      fill='url(#paint0_linear_93_2552)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_93_2552'
        x1='369.901'
        y1='112.5'
        x2='373.301'
        y2='219.176'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#1859E7' />
        <stop offset='1' stopColor='#1859E7' stopOpacity='0' />
      </linearGradient>
    </defs>
    <path
      d='M2.99463 211L46.8755 204L208.936 172L379.563 125.16C381.159 124.722 382.694 124.087 384.134 123.271L535.158 37.6355C537.068 36.5526 539.143 35.7915 541.301 35.3828L646.249 15.5L736.732 2.5'
      stroke='#1859E7'
      strokeWidth='5'
      strokeLinecap='round'
      strokeLinejoin='round'
      fill='none'
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
