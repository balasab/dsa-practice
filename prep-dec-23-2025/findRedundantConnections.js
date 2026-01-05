const findRedundantConnections = (edges) => {
    const n = edges.length;
    const parent = new Array(n + 1);
    const rank = new Array(n + 1).fill(0);

    const find = (x) => {
        if(parent[x] !== x) return find(parent[x]);
        return parent[x];
    }

    const union = (x, y) => {
        const px = find(x), py = find(y);
        if(px === py) return false;
        else if (rank[px] < rank[py]) parent[px] = py;
        else if (rank[py] < rank[px]) parent[py] = px;
        else {
            parent[py] = px;
            rank++;
        }
        return true;
    }

    for(const [u, v] of edges) {
        if(!union(u, v)) return [u, v];
    }
    
}