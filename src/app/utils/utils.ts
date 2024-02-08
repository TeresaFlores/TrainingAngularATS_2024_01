export const convertToHyphens = (value: string) => {
  return value.replace(/\s+/g, '-');
};

export const convertToSpaces = (value: string) => {
  return value.replace(/-/g, ' ');
};
