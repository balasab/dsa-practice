const longestRepeatingCharacterReplacement = (str, k) => {
    let l = 0;
    let longest = 0;
    let map = new map();
    let maxCharOccurance = 0;
    for (let r = 0; r < str.length; r++) {
        map.set(s[r], (map.get(s[r]) || 0) + 1);
        maxCharOccurance = Math.max(maxCharOccurance, map.get(s[r]));

        while (r - l + 1 - maxCharOccurnce > k) {
            map.set(s[r], (map.get(s[r]) || 0) - 1);
            if(map.get(s[r]) === 0) map.delete(s[r]);
            l++;
        }
        longest = Math.max(longest, r - l + 1);
    }
    return longest;
}