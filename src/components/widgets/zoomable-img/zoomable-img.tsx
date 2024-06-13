import React from 'react';

import styles from './zoomable-img.module.scss';

interface IProps {
  src: string;
}

export const ZoomableImg: React.FC<IProps> = ({ src }) => {
  return (
    <div>
      <img className={styles.img} src={src} alt='Картинка' />
    </div>
  );
};
