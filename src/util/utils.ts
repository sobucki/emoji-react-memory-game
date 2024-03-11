export const duplicateUniqueList = <T>(list: T[]): T[] => {
  const cleanList = [...new Set(list)];
  return [...cleanList, ...cleanList];
};

export const shuffle = <T>(array: T[]): T[] => {
  const arrayCopy = [...array];
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
  }
  return arrayCopy;
};
