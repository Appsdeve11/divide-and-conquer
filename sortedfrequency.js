function findFirst(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        result = mid;
        right = mid - 1; 
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return result;
  }
  
  function findLast(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        result = mid;
        left = mid + 1; 
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return result;
  }
  
  function sortedFrequency(arr, target) {
    const firstOccurrence = findFirst(arr, target);
    
    
    if (firstOccurrence === -1) {
      return 0;
    }
  
    const lastOccurrence = findLast(arr, target);
  
    return lastOccurrence - firstOccurrence + 1;
  }
  
  
  const sortedArray = [1, 1, 2, 2, 2, 3, 4, 4, 4, 5];
  const targetNumber = 2;
  console.log(sortedFrequency(sortedArray, targetNumber));