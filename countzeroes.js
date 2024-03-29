function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
     
      if (arr[mid] === 1) {
        left = mid + 1; 
      } else {
        
        if (mid === 0 || arr[mid - 1] === 1) {
          return arr.length - mid;
        } else {
          right = mid - 1;
        }
      }
    }
  
    return 0; 
  }
  

  const arr = [1, 1, 1, 0, 0, 0, 0];
  console.log(countZeroes(arr)); 