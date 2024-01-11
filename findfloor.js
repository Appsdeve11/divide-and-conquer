function findFloor(arr, x) {
    let start = 0;
    let end = arr.length - 1;
    let floorIndex = -1;
  
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
  
      if (arr[mid] <= x) {
        floorIndex = mid;
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  
    return floorIndex !== -1 ? arr[floorIndex] : -1;
  }
  
  // Example usage:
  const sortedArray = [1, 2, 8, 10, 10, 12, 19];
  const x = 5;
  console.log(findFloor(sortedArray, x));