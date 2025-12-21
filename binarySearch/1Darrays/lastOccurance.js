const lastOccurance = (arr, target) => {
    let left = 0, right = arr.length - 1;
    let ans = -1;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if(arr[mid] === target){
            ans = mid;
            left = mid + 1;
        }
        else if (arr[mid] > target) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return left - 1;
}
const arr = [3, 4, 13, 13, 13, 20, 40];
lastOccurance(arr, 13) //4