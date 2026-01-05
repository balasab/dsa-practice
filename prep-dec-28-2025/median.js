const medianOfTwoSortedArrays = (nums1, nums2) => {
    const m = nums1.length, n = nums2.length;
    const totalLeft = Math.floor((m + n + 1) / 2);
    let l = 0, r = m;
    while (l <= r) {
        const cut1 = Math.floor((l + r) / 2);
        const cut2 = totalLeft - cut1;
        
        const l1 = cut1 ===0 ? -Infinity : nums1[cut1 - 1];
        const l2 = cut2 ===0 ? -Infinity :nums2[cut2 - 1];
        const r1 = cut1 >=m ? Infinity : nums1[cut1];
        const r2 = cut2 >=n ? Infinity :nums2[cut2];

        if (l1 <= r2 && l2 <= r2) {
            if ((m + n) % 2 === 0) {
                return (Math.max(l1, l2) + Math.min(r1, r2))/2
            }
            return Math.max(l1, l2);
        } else if(l1 > r2) {
            r = cut1 - 1;
        } else {
            l = cut1 + 1;
        }
    }
    return -1;
}