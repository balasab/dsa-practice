const floorAndCeil = (arr, target) => {
    let left = 0, right = arr.length - 1;
    let floor = -1, ciel = -1;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return { floor: arr[mid], ciel: arr[mid] }
        }
        else if (arr[mid] < target) {
            floor = arr[mid];
            left = mid +1
        }
        else {
            ciel = arr[mid];
            right = mid - 1;
        }
    }
    return {floor, ciel};
}

const arr = [3, 4, 4, 7, 8, 10];

floorAndCeil(arr, 5);
// { floor: 4, ceil: 7 }

floorAndCeil(arr, 4);
// { floor: 4, ceil: 4 }
