const containerWithMostWater = (heights) => {
    let l = 0, r = heights.length - 1;
    let water = 0;
    while (l < r) {
        if (heights[l] < heights[r]){
            water = Math.max(water, heights[l] * (r - l + 1));
            l++;
        }
        else{
            water = Math.max(water, heights[r] * (r - l + 1));
            r--;
        }
    }
    return water;
}