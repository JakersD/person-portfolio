import { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';

export const useReactiveSwiper = () => {
  const swiper = useSwiper();

  // State to force a rerender.
  const [_, setSignal] = useState({});
  const forceRerender = () => setSignal({});

  useEffect(() => {
    if (swiper) {
      forceRerender();
      swiper.on('slideChange', forceRerender);
      return () => {
        swiper.off('slideChange', forceRerender);
      };
    }
  }, [swiper]);

  return swiper;
};
