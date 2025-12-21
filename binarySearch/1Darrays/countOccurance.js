const countOccurance = (arr, target) => {
    let left = 0, right = arr.length;
  
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid
        }
    }
    const lowerBound = left;
    left = 0, right = arr.length;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] <= target) {
            left = mid + 1;
        }
        else {
            right = mid
        }
    }
    const upperBound = left;
    return upperBound - lowerBound;
}
const arr = [2, 2, 3, 3, 3, 3, 4]
countOccurance(arr, 3) //4