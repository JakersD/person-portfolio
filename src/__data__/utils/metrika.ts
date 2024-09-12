import ym from 'react-yandex-metrika';

export const hit = (url: string) => {
  ym('hit', url);
};

export const goal = (goal: string) => {
  ym('reachGoal', goal);
};

export const goalDownloadCV = () => goal('download-cv');
export const goalGoTelegram = () => goal('go-tg');
export const goalGoWhatsApp = () => goal('go-whatsapp');
export const goalGoMail = () => goal('go-mail');
export const goalGoBehance = () => goal('go-behance');

export const goalContactMe = () => goal('contact-me');

export const goalRosSkill = () => goal('go-ros-skill');
export const goalLMSCase = () => goal('go-lms-case');
export const goalSproutyApp = () => goal('go-sprouty-app');
