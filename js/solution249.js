// Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
    let result = ''

    for (let i = 0; i < string.length; i++) {
        if (string[i].toUpperCase() === string[i]) {
            result += ` ${string[i]}`
        } else {
            result += string[i]
        }

    }
    return result
}
