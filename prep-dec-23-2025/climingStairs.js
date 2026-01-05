const climingStairs = (n) => {
    if (n <= 2) return n;
    let prev1 = 1;
    let prev = 2; 

    for (let i = 2; i < n; i++){
        let temp = prev + prev1;
        prev1 = prev;
        prev = temp;
    }
    return prev;
}