export const generateListFromNumber = (number: number): number[] => {
  if (!isNaN(number) && number > 0) {
    return Array.from({ length: number }, (_, i) => i + 1);
  }
  return [];
};