// Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

function evenChars(string) {
    if (string.length < 2 || string.length > 100) {
        return "invalid string"
    }
    let result = []

    for (let i = 0; i < string.length; i++) {
        if (i % 2 !== 0) {
            result.push(string[i])
        }
    }
    return result
}

