const findPeak = (arr) => {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if(arr[mid] < arr[mid+1]){`
            `
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

/*
    Assume -Infinity [1, 2, 3, 4, 5, 6, 7, 8, 5] -Infinty
    Now, We got something less in the left half and and something less in the right half 
    compare mid and mid + 1, if mid id smaller then move the left to mid + 1 as mid + 1 now has 
    lesser element in both the sides else move right as mid now mid + 1 is less than mid.   
*/