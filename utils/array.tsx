export const numberToArray = (num: number): number[] => {
  const result = Array.from({ length: num }, (_, i) => i + 1);
  return result;
};
