export const duplicateUniqueList = (list: string[]): string[] => {
  const cleanList = [...new Set(list)];
  return [...cleanList, ...cleanList];
};
