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
  },
  {
    text: 'Behance',
    icon: behanceIcon,
  },
  {
    text: 'Telegram',
    icon: telegramIcon,
  },
  {
    text: 'WhatsApp',
    icon: whatsAppIcon,
  },
  {
    text: 'Mail',
    icon: mailIcon,
  },
];

export const TagList: React.FC = () => {
  return (
    <ul className={styles.list}>
      {getTagList().map((v, i) => (
        <li className={styles.item} key={getUniqueKey(v.text, i)}>
          <Tag icon={v.icon}>{v.text}</Tag>
        </li>
      ))}
    </ul>
  );
};
