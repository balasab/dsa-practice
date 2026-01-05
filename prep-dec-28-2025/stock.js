const bestTimeTobuyStock = (nums) => {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let num of nums) {
        minPrice = Math.min(num, minPrice);
        maxProfit = Math.max(maxProfit, num - minPrice);
    }
    return maxProfit;
}