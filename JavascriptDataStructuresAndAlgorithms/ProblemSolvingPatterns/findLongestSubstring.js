function findLongestSubstring(str) {
    //"thisisawesome
    //longestsubstring

    let start = 0;
    let end = 0;
    let longest = 0;
    let seen = {};
    let index = {};

    for (let i = 0; i < str.length; i++) {
        char = str[i]
        if (!(seen[char])) {
            seen[char] = 1;
            index[char] = i;
            end++;
        } else {
            longest = Math.max(longest, end - start);
            seen = {};
            start = 0;
            end = 0;
            i = index[char] + 1;
            index = {}

        }
        //console.log(start, end, i, seen[char])
    }

    return longest;
}

console.log(findLongestSubstring(""))
console.log(findLongestSubstring("rithmschool"))
console.log(findLongestSubstring("thisisawesome"))
// console.log(findLongestSubstring("thecatinthehat"))
// console.log(findLongestSubstring("bbbbbb"))
// console.log(findLongestSubstring("longestsubstring"))
// console.log(findLongestSubstring("thisishowwedoit"))
