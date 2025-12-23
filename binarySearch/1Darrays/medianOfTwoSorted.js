const medianOfTwoSortedArrays = (nums1, nums2) => {
    const m = nums1.length, n = nums2.length;
    if (m > n) {
        return medianOfTwoSortedArrays(nums2, nums1);
    }

    let left = 0, right = m;
    const totalLeft = Math.floor((m + n + 1) / 2); // add +1 so left has one item more if odd
    while (left <= right) {
        const cut1 = Math.floor((left + right) / 2);
        const cut2 = totalLeft - cut1;

        const l1 = cut1 === 0 ? -Infinity : nums1[cut1 - 1];
        const l2 = cut2 === 0 ? -Infinity : nums2[cut2 - 1];
        const r1 = cut1 === m ? Infinity : nums1[cut1];
        const r2 = cut2 === n ? Infinity : nums2[cut2];

        if (l1 <= r2 && l2 <= r1) {
            if ((m + n) % 2 === 0) {
                return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
            }
            return Math.max(l1, l2);
        }
        else if (l1 > r2) {
            right = cut1 - 1;
        }
        else {
            left = cut1 + 1;
        }
    }
    return -1;
}

/**
 * if(m>n) swap(m,n)
 * left = 0 , right = m
 * totalLeft = m+n/2
 * while (left <= right)
 *      mid1 = left+right/2 
 *      mid2 = TotalLeft - mid1 
 *      find l1, l2 = mid - 1   if mid = 0 then -infiniry 
 *      find r2, r3 = mid if mid = n then Infinity
 *      
 *      if(l1<r2 & l2<r1) return max(l1,l2) + min(r1,r2)/2
 *      else if(l1>r2) right = mid // l1 larger so move right to find smaller l1 
 *      else left = mid + 1 // l2 larger so move left find bigger r1
*/