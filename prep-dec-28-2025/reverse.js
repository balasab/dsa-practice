const reverseString = (str) => str.reverse();

const reverseStringTwoPointers = (str) => {
    let l = 0, r = str.length - 1;

    while (l < r) {
        [str[l], str[r]] = [str[r], str[l]];
        l++;
        r--;
    }
    return str;
}