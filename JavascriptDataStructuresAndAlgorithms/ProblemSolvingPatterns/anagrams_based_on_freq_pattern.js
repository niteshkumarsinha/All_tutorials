// function validAnagram(str1, str2) {
//     let frequencyCounterStr1 = {};
//     let frequencyCounterStr2 = {};

//     for (let char of str1) {
//         frequencyCounterStr1[char] = (frequencyCounterStr1[char] || 0) + 1;
//     }

//     for (let char of str2) {
//         frequencyCounterStr2[char] = (frequencyCounterStr2[char] || 0) + 1;
//     }

//     console.log(frequencyCounterStr1);
//     console.log(frequencyCounterStr2);

//     for (let key in frequencyCounterStr1) {
//         if (!(key in frequencyCounterStr2)) {
//             return false;
//         }
//         if (frequencyCounterStr1[key] !== frequencyCounterStr2[key]) {
//             return false;
//         }
//     }
//     return true
// }


function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram('anagrams', 'nagaramm')
console.log(validAnagram("anagram", "nagaram"))