const searchInRotatedSortedArray = (arr, target) => {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[left] <= arr[mid]) {
            //left half sorted
            if (arr[left] <= target && target < arr[mid]) {
                right = mid - 1;
            }
            else {
                left = mid + 1;
            }
        }
        else {
            // right half sorted
            if (arr[mid] < target && target <= arr[right]) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
    }
    return -1;
}
const arr = [4, 5, 6, 7, 0, 1, 2];
searchInRotatedSortedArray(arr, 0) //4

const rotatedSearchII = (arr, target) => {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return true;
        //handle duplicates Example: [3, 1, 3, 3, 3]
        if (arr[mid] === arr[right] && arr[mid] === arr[left]) {
            left++;
            right--;
            continue;
        }
        if (arr[left] <= arr[mid]) {
            if (arr[left] <= target && target < arr[mid]) {
                right = mid - 1;
            }
            else {
                left = mid + 1;
            }
        }
        else {
            if (arr[mid] < target && target <= arr[right]) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
    }
    return false;
}
const arr2 = [7, 8, 1, 2, 3, 3, 3, 3, 4, 5, 6];
rotatedSearchII(arr2, 3) // true

const findMinimumInRotatedArray = (arr) => {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] > arr[right]) {
            left = mid + 1;
        }
        else {
            right = mid;
        }
    }
    return arr[left];
}
const arr3 = [4, 5, 6, 7, 0, 1, 2, 3];
findMinimumInRotatedArray(arr3); // 0

const noOfTimes = (arr) => {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] > arr[right]) {
            left = mid + 1;
        }
        else {
            right = mid;
        }
    }
    return left;
}
const arr4 = [4, 5, 6, 7, 0, 1, 2, 3];
noOfTimes(arr4); // 4

// One side is monotonic [Either one half decreases or increases]