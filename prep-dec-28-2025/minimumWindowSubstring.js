const MinimumWindowSubString = (s, t) => {
    const tFreq = new Map();
    for (let c of t) {
        tFreq.set(c, (tFreq.get(c) || 0) + 1);
    }
    let found = 0;
    const sFreq = new Map();
    let minLen = Infinity;
    let start = 0;
    let l = 0;
    for (let r = 0; r < s.length; r++) {
        if(tFreq.has(c)){
            sFreq.set(c, (sFreq.get(c) || 0) + 1);
            if(sFreq.get(c) === tFreq.get(c)) {
                found++;
            }
        }
        while (found === t.length) {
            let currLen = r - l + 1
            if (minLen > currLen) {
                minLen = r - l + 1;
                start = l;
            }
            let currChar = s[l];
            if (sFreq.has(currChar)) {
                sFreq.set(currChar, (sFreq.get(currChar)||0) - 1);
                if(sFreq.get(currChar) === 0) sFreq.delete(currChar);
            }
            if(sFreq.get(currChar) !== tFreq.get(currChar)) {
                    found--;
            }
            l++;
        }
    }
    return minLen === Infinity ? "" : s.slice(s, minLen);
}