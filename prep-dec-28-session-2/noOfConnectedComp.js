const findNumberOfConnectedComponents = (n, edges) => {
    const parent = Array.from({ length: n }, (_, i) => i);
    const rank = Array(n).fill(0);
    let components = n;
    const find = (x) => {
        if(parent[x] !=== x) parent[x] = find(parent[x]);
        return parent[x];
    }

    const union = (u, v) => {
        const px = find(u), py = find(v);

        if (px === py) return;
        if (rank[px] < rank[py]) {
            parent[px] = py;
        } else if (rank[py] < rank[px]) {
            parent[py] = px;
        } else {
            parent[py] = px;
            rank[px]++;
        }

        components--;
    }

    for (const [u, v] of edges) union(u, v);

    return components;
}