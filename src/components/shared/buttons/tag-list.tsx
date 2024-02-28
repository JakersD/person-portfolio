import React from 'react';

import styles from './tag-list.module.scss';
import { Tag } from '@/components';

import documentIcon from '@public/icons/document.svg';
import behanceIcon from '@public/icons/behance.svg';
import telegramIcon from '@public/icons/telegram.svg';
import whatsAppIcon from '@public/icons/whatsapp.svg';
import mailIcon from '@public/icons/mail.svg';
import { getUniqueKey } from '@/_data';

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
