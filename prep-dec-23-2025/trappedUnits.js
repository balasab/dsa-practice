const findTrappedUnits = (height) => {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let units = 0;
    while (left < right) {
        if (height[left] <= height[right]) {
            leftMax = Math.max(leftMax, height[left]);
            units += leftMax - height[left];
            left++;
        } else {
            rightMax = Math.max(rightMax, height[right]);
            units += rightMax - height[right];
            right--;
        }
    }
    return units;
}