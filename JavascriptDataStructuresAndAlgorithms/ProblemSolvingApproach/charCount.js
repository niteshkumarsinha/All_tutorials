//Write a function that takes in a string and returns count of each character in the string

// function charCount(str) {
//     count = {}
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i].toLowerCase()
//         if (/[a-z0-9]/.test(char)) {
//             if (count[char] > 0) {
//                 count[char]++;
//             } else {
//                 count[char] = 1;
//             }
//         }
//     }
//     return count
// }

function charCount(str) {
    count = {}
    for (let char of str) {

        if (isAlphanumeric(char)) {
            char = char.toLowerCase()
            count[char] = ++count[char] || 1
        }
    }
    return count
}


function isAlphanumeric(char) {
    let code = char.charCodeAt(0);

    if (!(code > 47 && code < 58) &&  // numeric (0-9)
        !(code > 64 && code < 91) &&  // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false
    }

    return true
}


console.log(charCount("Nitesh Kumar Sinha"))