const nthRootOfM = (n, m)=>{
    let left = 0, right = m;
    while(left <= right){
        const mid = Math.floor((left+right)/2);
        let power = 1;
        for(let i = 0; i < n;i++){
            power *= mid;
            if(power > m) break; // early stop
        }
        if(power === m) return mid;
        if(power < m) {
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }
    return -1;
}
nthRootOfM(3, 27) // 3
nthRootOfM(4, 69) // -1