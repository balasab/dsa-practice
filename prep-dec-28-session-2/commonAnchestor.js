const commonAncestor = (root, p, q) => {
    if(!root || root === p || root === q) return root;
    const left = commonAncestor(root.left, p, q);
    const right = commonAncestor(root.right, p, q);
    if(left && right) return root;
    return left || right;
}