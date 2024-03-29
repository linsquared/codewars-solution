
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


var groupAnagrams = function (strs) {
    let map = {}

    for (let str of strs) {
        let s = str.split('').sort().join('')
        if (!map[s]) map[s] = []
        map[s].push(str)
    }
    return map
};