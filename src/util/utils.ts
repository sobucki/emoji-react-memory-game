export const duplicateUniqueList = <T>(list: T[]): T[] => {
  const cleanList = [...new Set(list)];
  return [...cleanList, ...cleanList];
};
