import React from 'react';

import documentIcon from '@assets/icons/document.svg';
import behanceIcon from '@assets/icons/behance.svg';
import telegramIcon from '@assets/icons/telegram.svg';
import whatsAppIcon from '@assets/icons/whatsapp.svg';
import mailIcon from '@assets/icons/mail.svg';

import styles from './tag-list.module.scss';
import { getUniqueKey } from '@data/utils/core';
import { Tag } from './tag';
import { ELinks } from '@data/config/links';

const getTagList = () => [
  {
    text: 'Скачать CV',
    icon: documentIcon,
    link: ELinks.CV,
  },
  {
    text: 'Behance',
    icon: behanceIcon,
    link: ELinks.BEHANCE,
  },
  {
    text: 'Telegram',
    icon: telegramIcon,
    link: ELinks.TELEGRAM,
  },
  {
    text: 'WhatsApp',
    icon: whatsAppIcon,
    link: ELinks.WHATS_APP,
  },
  {
    text: 'Mail',
    icon: mailIcon,
    link: ELinks.MAIL,
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
