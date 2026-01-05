const trappingRainWater  = (heights) => {
    let l = 0, r = height.length - 1;
    let lMax = 0, rMax = r;
    let units = 0;
    while (l < r) {
        if (heights[l] <= heights[r]){
           lMax = Math.max(lMax, heights[l]);
           units = lMax - heights[l];
           l++;
        } else{
            rMax = Math.max(rMax, heights[r]);
            units += rMax - heights[r];
           r--;
        }
    }
    return units;
}