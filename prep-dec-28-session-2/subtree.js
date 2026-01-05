const isSameTree = (rootA, rootB) => {
    if (rootA === rootB) return true;
    return isSameTree(rootA.left, rootB.left) && isSameTree(rootA.right, rootB.right);
}
const isSubTree = (root, subRoot) => {
    if(!root && !subRoot) return true;
    if(!root || !subRoot) return false;
    return isSameTree(root, subRoot) || isSubTree(root.left, subRoot) || isSubTree(root.right, subRoot);
}