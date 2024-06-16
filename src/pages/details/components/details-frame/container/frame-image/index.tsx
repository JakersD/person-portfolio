import { ZoomImg } from '@components/widgets';
import React from 'react';

interface IProps {
  images: string[];
}

export const FrameGallery: React.FC<IProps> = ({ images }) => <ZoomImg images={images} />;
