const findKthItemOfTwoSortedArrays = (nums1, nums2, k) => {
    const m = nums1.length, n = nums2.length;

    if (m > n) {
        return findKthItemOfTwoSortedArrays(nums2, nums1, k);
    }

    let left = Math.max(0, k - m);
    let right = Math.min(m, k);

    while (left <= right) {
        const cut1 = Math.floor((left + right) / 2);
        const cut2 = k - cut1;

       const l1 = cut1 === 0 ? -Infinity : arr1[cut1 - 1];
        const l2 = cut2 === 0 ? -Infinity : arr2[cut2 - 1];
        const r1 = cut1 === m ? Infinity : arr1[cut1];
        const r2 = cut2 === n ? Infinity : arr2[cut2];

        if (l1 <= r2 && l2 <= r1) {
            return Math.max(l1, l2);
        }
        else if (l1 > r2){
            right = mid - 1;
        }
        else{
            left = mid + 1;
        }
    }
}