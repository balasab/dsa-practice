const binarySearch = (arr, target) => {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor(left + right / 2);
        if (arr[mid] === target) {
            return mid
        }
        else if (arr[mid] > target) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return -1;
}
const arr = [1, 2, 4, 5];

binarySearch(arr, 4); // 2
