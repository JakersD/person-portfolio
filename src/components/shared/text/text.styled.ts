import styled from '@emotion/styled';
import { ETextSize, ETextWeight } from '../model';

const getSize = (size: ETextSize) =>
  size === ETextSize.SM
    ? {
        fontSize: '14px',
        lineHeight: '20px',
      }
    : {
        fontSize: '18px',
        lineHeight: '26px',
      };

const getWeight = (weight: ETextWeight) =>
  weight === ETextWeight.NORMAL
    ? {
        fontWeight: '400',
      }
    : {
        fontWeight: '700',
      };

export const SText = styled('p')(({ size, weight }: { size: ETextSize; weight: ETextWeight }) => ({
  color: '#0B1F33',
  ...getSize(size),
  ...getWeight(weight),
}));
