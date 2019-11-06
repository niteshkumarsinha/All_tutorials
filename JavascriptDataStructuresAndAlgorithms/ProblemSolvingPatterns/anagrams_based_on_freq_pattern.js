function validAnagram(str1, str2) {
    let frequencyCounterStr1 = {};
    let frequencyCounterStr2 = {};

    for (let char of str1) {
        frequencyCounterStr1[char] = (frequencyCounterStr1[char] || 0) + 1;
    }

    for (let char of str2) {
        frequencyCounterStr2[char] = (frequencyCounterStr2[char] || 0) + 1;
    }

    console.log(frequencyCounterStr1);
    console.log(frequencyCounterStr2);

    for (let key in frequencyCounterStr1) {
        if (!(key in frequencyCounterStr2)) {
            return false;
        }
        if (frequencyCounterStr1[key] !== frequencyCounterStr2[key]) {
            return false;
        }
    }
    return true
}

console.log(validAnagram("anagram", "nagaram"))