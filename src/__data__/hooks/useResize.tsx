import { useEffect, useState } from 'react';

export enum EScreenSize {
  FULL = 'FULL',
  LG = 'LG',
  MD = 'MD',
  SM = 'SM',
  ULTRA_SM = 'ULTRA_SM',
}

export const useResize = () => {
  const [screenSize, setScreenSize] = useState<EScreenSize>(EScreenSize.SM);

  useEffect(() => {
    const resize = () => {
      if (window.innerWidth <= 430) {
        return setScreenSize(EScreenSize.ULTRA_SM);
      }
      if (window.innerWidth <= 630) {
        return setScreenSize(EScreenSize.SM);
      }
      if (window.innerWidth <= 768) {
        return setScreenSize(EScreenSize.MD);
      }
      if (window.innerWidth <= 1196) {
        return setScreenSize(EScreenSize.LG);
      }

      return setScreenSize(EScreenSize.FULL);
    };
    resize();

    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  }, []);

  return screenSize;
};
