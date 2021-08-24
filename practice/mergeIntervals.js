function mergeOverlappingIntervals(array) {
  // base case
  if (array.length <= 1) return array;

  // sort the array
  array = array.sort((a, b) => a[0] - b[0]);

  const result = [array[0]];
  for (let i = 1; i < array.length; i++) {
    const currentInterval = array[i];
    const previousInterval = result[result.length - 1];
    // case1: start(current) < start(previous) && end(current) > end(previous)
    if (
      currentInterval[0] < previousInterval[0] &&
      currentInterval[1] > previousInterval[1]
    ) {
      result.pop();
      result.push([currentInterval[0], currentInterval[1]]);
    }
    // case 2: start(current) >= start(previous) && end(current) > end(previous)
    else if (
      currentInterval[0] >= previousInterval[0] &&
      currentInterval[1] > previousInterval[1]
    ) {
      result.pop();
      result.push([previousInterval[0], currentInterval[1]]);
    }
    // case 3: start(current) < start(previous) && end(current) >= end(previous)
    else if (
      currentInterval[0] < previousInterval[0] &&
      currentInterval[1] >= previousInterval[1]
    ) {
      result.pop();
      result.push([currentInterval[0], previousInterval[1]]);
    } else if (
      currentInterval[0] === previousInterval[1] &&
      currentInterval[1] > previousInterval[1]
    ) {
      result.pop();
      result.push([previousInterval[0], currentInterval[1]]);
    } else if (currentInterval[0] > previousInterval[1]) {
      result.push([currentInterval[0], currentInterval[1]]);
    }
  }
  return result;
}

const a = [
  [1, 22],
  [-20, 30],
];

console.log(mergeOverlappingIntervals(a));
