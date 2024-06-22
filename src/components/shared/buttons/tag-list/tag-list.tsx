import React from 'react';

import documentIcon from '@assets/icons/document.svg';
import behanceIcon from '@assets/icons/behance.svg';
import telegramIcon from '@assets/icons/telegram.svg';
import whatsAppIcon from '@assets/icons/whatsapp.svg';
import mailIcon from '@assets/icons/mail.svg';

import styles from './tag-list.module.scss';
import { getUniqueKey } from '@data/utils/core';
import { Tag } from './tag';

const getTagList = () => [
  {
    text: 'Скачать CV',
    icon: documentIcon,
    link: '/person-portfolio/CV_Ekaterina_Cherkasova.pdf',
  },
  {
    text: 'Behance',
    icon: behanceIcon,
    link: 'https://www.behance.net/kolyada050e3a5',
  },
  {
    text: 'Telegram',
    icon: telegramIcon,
    link: 'https://t.me/cherkasova_kolyada',
  },
  {
    text: 'WhatsApp',
    icon: whatsAppIcon,
    link: 'https://wa.me/79153109996',
  },
  {
    text: 'Mail',
    icon: mailIcon,
    link: 'mailto:kolyada.0504@gmail.com',
    isLink: true,
  },
];

export const TagList: React.FC = () => {
  return (
    <ul className={styles.list}>
      {getTagList().map((v, i) => (
        <li className={styles.item} key={getUniqueKey(v.text, i)}>
          <Tag icon={v.icon} link={v.link} isLink={v.isLink}>
            {v.text}
          </Tag>
        </li>
      ))}
    </ul>
  );
};
