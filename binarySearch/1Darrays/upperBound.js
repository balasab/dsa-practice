const upperBound = (arr, target) => {
    let left = 0, right = arr.length;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] <= target) {
            left = mid + 1;
        }
        else {
            right = mid;
        }
    }
    return left;
}
const arr = [1, 2, 4, 4, 4, 5];

upperBound(arr, 4); // 5