const largestRectangelInhistogram = (heights) => {
    let stack = [];
    let largest = 0;

    for (let i = 0; i <= heights.length; i++) {
        const h = i === heights.length ? 0 : heights[i];
        while (stack.length && h < stack[stack.length - 1]) {
            const height = heights[stack.pop()];
            const width =  stack.length  ? i - stack[stack.length - 1] - 1: i;   
            largest = Math.max(largest, height * w)
        }
        stack.push(i);
    }
    return largest
}