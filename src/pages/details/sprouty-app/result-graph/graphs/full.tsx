import React from 'react';

import styles from '../result-graph.module.scss';

export const GraphFULL: React.FC = () => (
  <svg width='100%' height='212' viewBox={`0 0 1065 212`}>
    <path
      opacity='0.3'
      d='M548.353 122L300.477 169.5L67.0129 202L0 212H1065V0L990.781 7L776.052 34L548.353 122Z'
      fill='url(#paint0_linear_93_3659)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_93_3659'
        x1='534.525'
        y1='112.5'
        x2='536.879'
        y2='219.232'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#1859E7' />
        <stop offset='1' stopColor='#1859E7' stopOpacity='0' />
      </linearGradient>
    </defs>
    <path
      d='M2.88159 211L66.2916 204L300.476 172L548.679 124.849C549.899 124.617 551.095 124.272 552.252 123.818L773.773 36.8941C775.286 36.3003 776.866 35.8931 778.478 35.6818L932.415 15.5L1063.17 2.5'
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
