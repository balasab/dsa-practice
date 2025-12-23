const findSquareRoot = (num) => {
    let left = 0, right = num;
    let ans = 0;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        const square = mid * mid;
        if (square === num) return mid;
        if (square > num) {
            right = mid - 1;
        }
        else {
            ans = mid;
            left = mid + 1;
        }
    }
    return ans;
}
findSquareRoot(36); // 6
findSquareRoot(28); // 5 {floor of [28] (5*5)}
