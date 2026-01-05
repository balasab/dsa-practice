const findRedunantConnection = (edges) => {
    const n = edges.length;
    const p = Array.from({ length: n + 1 }, (_, i) => i);
    const r = Array(n+1).fill(0);

    const find = (x) => {
        if (p[x] !== x) p[x] = find(p[x]);
        return p[x];
    }

    const union = (u, v) => {
        const px = find(u), py = find(v);

        if (px === py) return false;
        if (rank[px] < rank[py]) {
            p[px] = py;
        } else if (rank[py] > rank[px]) {
            p[py] = px;
        } else {
            p[py] = px;
            rank[px]++;
        }

        return true;
    }

    for (const [u, v] of edges) {
        if (!union(u, v)) return [u, v];
    }
}