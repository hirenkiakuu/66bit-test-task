const monthNames = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

export const convertDate = (dateStr: string): string => {
  const [dayStr, monthStr, yearStr] = dateStr.split(' ');

  const day = parseInt(dayStr);
  const month = monthNames.indexOf(monthStr);
  const year = parseInt(yearStr);

  const date = new Date(year, month, day);

  return new Intl.DateTimeFormat('ru-RU').format(date);
};
