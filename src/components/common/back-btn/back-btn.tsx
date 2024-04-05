'use client';

import React from 'react';

import { combineStyles } from '@/_data';
import { useRouter } from 'next/navigation';

import styles from './back-btn.module.scss';

interface IProps {
  className?: string;
}

export const BackBtn: React.FC<IProps> = ({ className }) => {
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

  return (
    <button className={combineStyles([styles.back, className])} onClick={handleBack}>
      Назад
    </button>
  );
};
