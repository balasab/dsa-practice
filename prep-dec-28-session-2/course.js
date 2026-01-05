const courseSchedule = (numCourses, prerequisities) => {
    const adj = Array.from({ length: numCourses }, () => []);
    const inDegree = new Array(numCourses).fill(0);

    for (let [a, b] of prerequisities) {
        adj[b].push(a);
        inDegree[a]++;
    }
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }
    let completed = 0
    while (queue.length) {
        let course = queue.shift();
        completed++;
        for (const v of adj[course]) {
            if (--inDegree[v] === 0) queue.push(v);
        }
    }
    return completed === numCourses;
}