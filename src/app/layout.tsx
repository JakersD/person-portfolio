import type { Metadata } from 'next';
import Lato from 'next/font/local';

import '@/styles/index.scss';
import styles from './layout.module.scss';
import { HeaderWidget } from '@/components/common';

const lato = Lato({
  src: [
    {
      path: '../fonts/Lato-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Lato-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/Lato-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My portfolio site',
  icons: {
    icon: [
      {
        url: '/icons/favicon.ico',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={lato.className}>
        <div className={styles.wrapper}>
          <HeaderWidget />
          {children}
        </div>
      </body>
    </html>
  );
}
