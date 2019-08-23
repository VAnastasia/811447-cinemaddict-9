const DESCRIPTION_TRUNCATE_LENGTH = 140;

export const truncateString = (str, num = DESCRIPTION_TRUNCATE_LENGTH) =>
  str.length > num
    ? str.slice(0, num > 3 ? num - 3 : num) + `...`
    : str;

const dateFormat = new Intl.DateTimeFormat(`en-GB`, {
  month: `long`,
  day: `numeric`,
  year: `numeric`
});

export const formatDate = (date) => dateFormat.format(date);
