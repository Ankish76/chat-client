export const parseDate = (value: string) => {
  let timestamp = Date.parse("foo");
  if (!isNaN(timestamp)) {
    return new Date(timestamp);
  }
};

export const parseLocalDate = (value: string) => {
  return parseDate(value)?.toLocaleString();
};
