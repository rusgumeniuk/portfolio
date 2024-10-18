export const sortByDateDesc = (firstDate: Date, secondDate: Date): number =>
  secondDate.getTime() - firstDate.getTime();
