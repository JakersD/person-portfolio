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
import {
  goalDownloadCV,
  goalGoBehance,
  goalGoMail,
  goalGoTelegram,
  goalGoWhatsApp,
} from '@data/utils/metrika';

const getTagList = () => [
  {
    text: 'Скачать CV',
    icon: documentIcon,
    link: ELinks.CV,
    onClick: goalDownloadCV,
  },
  {
    text: 'Telegram',
    icon: telegramIcon,
    link: ELinks.TELEGRAM,
    onClick: goalGoTelegram,
  },
  {
    text: 'WhatsApp',
    icon: whatsAppIcon,
    link: ELinks.WHATS_APP,
    onClick: goalGoWhatsApp,
  },
  {
    text: 'Mail',
    icon: mailIcon,
    link: ELinks.MAIL,
    isLink: true,
    onClick: goalGoMail,
  },
  {
    text: 'Behance',
    icon: behanceIcon,
    link: ELinks.BEHANCE,
    onClick: goalGoBehance,
  },
];

export const TagList: React.FC = () => {
  return (
    <ul className={styles.list}>
      {getTagList().map((v, i) => (
        <li className={styles.item} key={getUniqueKey(v.text, i)}>
          <Tag onClick={v.onClick} icon={v.icon} link={v.link} isLink={v.isLink}>
            {v.text}
          </Tag>
        </li>
      ))}
    </ul>
  );
};
