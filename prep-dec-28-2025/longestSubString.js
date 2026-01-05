const longestSubstringWithoutRepeatingChar = (str) => {
    const map = new Map();
    let l = 0;
    let longest = 0;
    for (let r = 0; r < str.length; r++) {
        let s = str[r];
        if (map.has(s)) {
            l = map.get(s) + 1;
        }
        longest = Math.max(longest, r -  l + 1);
        map.set(s, r);
    }
    return longest;
}