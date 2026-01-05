const dialyTemperatures = (temperatures) => {
    const n = temperatures.length;
    const warmer = new Array(n).fill(0);
    let stack = [];

    for (let r = 0; r < n; r++) {
        if (stack.length !== 0 && temperatures[r] > temperatures[stack[stack.length - 1]]) {
            warmer[r] = r - stack.pop() + 1;
        }
        stack.push(r);
    }
    return warmer;
}