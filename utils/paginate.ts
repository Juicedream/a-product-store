export const paginate = (startNumber: number, totalNumber:number) => {
  const array: number[] = [];
  for (let i = startNumber; i <= totalNumber; i++) {
    if (array.length !== 3) {
      array.push(i);
      continue;
    }
  }
  if (array.length !== 3) {
    return [];
  }
  return array;
}