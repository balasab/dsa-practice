const maxPathSum = (root) => {
    let maxSum = -Infinity;
    const dfs = (node) => {
        if(!node) return 0;
        let left = Math.max(0, dfs(node.left));
        let right = Math.max(0, dfs(node.right));
        maxSum = Math.max(maxSum, left + node.val + node.right);
        return node.val + Math.max(left, right);
    }
    dfs(root);
    return maxSum;
}