const houseRobber = (houses) => {
    let prev2 = 0, prev1 = 0;
    
    for (const money of houses) {
        const curr = Math.max(prev1, prev2 + money);
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}