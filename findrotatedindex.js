function findRotatedIndex(arr, num) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
  
      if (arr[mid] === num) {
        return mid;
      }
  
      
      if (arr[start] <= arr[mid]) {
        
        if (arr[start] <= num && num < arr[mid]) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      } else {
       
        if (arr[mid] < num && num <= arr[end]) {
          start = mid + 1;
        } else {
          end = mid - 1;
        }
      }
    }
  
    return -1; 
  }
  
  
  const rotatedArray = [4, 5, 6, 7, 0, 1, 2];
  const targetNumber = 0;
  console.log(findRotatedIndex(rotatedArray, targetNumber)); // Output: 4