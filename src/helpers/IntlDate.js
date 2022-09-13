const dateToIntlFormat = (date, lang) => {
  const newDate = new Date(date.split("-"));
  const locales = { en: "en-EN", de: "de-DE", pl: "pl-PL" };
  const options = { day: "numeric", month: "short", year: "numeric" };
  return Intl.DateTimeFormat(locales[lang], options).format(newDate);
};

export default dateToIntlFormat;
