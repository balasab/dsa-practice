const findPeak = (arr) => {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if(arr[mid] < arr[mid+1]){
            left = mid + 1;
        }
        else{
            right = mid;
        }
    }
    return left;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 5];
findPeak(arr) // 7 value = 8