const maximizeGreeders = (greeders, resources) => {
    greeders.sort((a, b) => a - b);
    resources.sort((a, b) => a - b);

    let l = 0, r = 0;

    while (l < greeders.length && r < resources.length){
        if(greeders[l] <= resources[r]){
            l++; // greeder satisfied
        }
        r++;
    }
    return l;
}
maximizeGreeders([1, 2, 3], [1, 1]); // Output: 1
maximizeGreeders([1, 2], [1, 2, 3]); // Output: 2