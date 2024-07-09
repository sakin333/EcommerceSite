export const ellipsis = (text: string, max: number = 50) => {
  if (text.length <= max) return text;

  return text.substring(0, max) + "...";
};
