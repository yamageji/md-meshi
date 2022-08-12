const monthConversionTable = {
  '01': 'JAN',
  '02': 'FEB',
  '03': 'MAR',
  '04': 'APR',
  '05': 'MAY',
  '06': 'JUN',
  '07': 'JUL',
  '08': 'AUG',
  '09': 'SEP',
  '10': 'OCT',
  '11': 'NOV',
  '12': 'DEC',
};

type MonthConversionTable = keyof typeof monthConversionTable;

export const useFormatDate = (date: string) => {
  const year = ref('');
  const month = ref();
  const day = ref('');
  const convertedMonth = ref('');
  const convertedJapanese = ref('');

  if (typeof date === 'string') {
    [year.value, month.value, day.value] = date.split('-');
    convertedMonth.value = convertMonth(month.value);
    convertedJapanese.value = convertJapanese(year.value, month.value);
  }
  return { year, month, day, convertedMonth, convertedJapanese };
};

const convertMonth = (value: MonthConversionTable): string => {
  const result = value.replace(value, monthConversionTable[value]);
  return result;
};
const convertJapanese = (year: string, month: string): string => {
  return `${year}年${month}月`;
};
