const NinjaTraining = (points) => {
    const m = points.length; // no of days

    if (m === 0) return 0;

    let act1 = points[0][0];
    let act2 = points[0][1];
    let act3 = points[0][2];

    for (let i = 1; i < m; i++) {
        let temp = { act1, act2, act3 };
        act1 = points[i][0] + Math.max(temp.act2, temp.act3);
        act2 = points[i][1] + Math.max(temp.act1, temp.act3);
        act3 = points[i][2] + Math.max(temp.act2, temp.act3);
    }

    return Math.max([act1, act2, act3]);

}
// TC: O(n) no of days , SC: O(1)