

// const body = document.querySelector('body')
// document.querySelector('#colorbtn').addEventListener('click', change)

// function change(){
//     let rbg1 = document.querySelector('#rgb1').innerText = `${Math.floor(Math.random()*255)},`
//     let rbg2 = document.querySelector('#rgb2').innerText = ` ${Math.floor(Math.random()*255)},`
//     let rbg3 = document.querySelector('#rgb3').innerText = ` ${Math.floor(Math.random()*255)}`
//     const rgbValue = `rgb(${rgb1.innerText}${rgb2.innerText}${rgb3.innerText})`

//     body.style.backgroundColor = rgbValue

// }





function meeting(s) {
  return s.toUpperCase().replace(/:/g, ', ').split(';')
}

// console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))

function wave(str) {
  let spaceStr = str + ', '
  let newStr = spaceStr.repeat(str.length).slice(0, -2).split(' ')
  let result = []

  for (let i = 0; i < newStr.length; i++) {
    for (let j = 0; j < newStr[i].length; j++) {
      if (newStr[i] + 1 == newStr[i][j] + 1) {
        console.log('aye')
      }
    }
  }
  // return result
}

// console.log(wave('codewars'))

function high(x) {
  let s = x.split(' ').map(word => word.split(''))
  let z = s.map(words => words.charCodeAt())
}

// console.log(high('man i need a taxi up to ubud'))




function nextNumb(val) {
  val % 3 == 0 && val % 2 != 0 && new Set(val.toString().split('')).size == val.toString().split('').length


  // let count = val
  // while( count != nextNumber)

  // count++
  // console.log(count)

  // return nextNumber; 
  // 
}

// console.log(nextNumb(14))

// their digits occur only once

// they are odd

// they are multiple of three


function solution(number) {
  let multipleOf3and5 = []
  if (number <= 3) {
    return 0
  } else {
    for (let i = 1; i < number; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        multipleOf3and5.push(i)
      }
    }

    return multipleOf3and5.reduce((a, c) => a + c)

  }
}
function compare(array) {
  // acc = starts as one of our arrays
  // loop through array of arrays
  // compare current array with our acc
  // for each element in current
  // if that element exisist in acc 
  // push that element into a new array

  // acc reassigned to new array
  // return our acc
  let result = []
  let acc = array[0]
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (acc.includes(array[i][j])) {
        result.push(array[i][j])
        acc = result
      }

    }
  }

  // return result
}


const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
// console.log(compare([arr1, arr2, arr3])); // should log: [5, 15]

function userGreeting(str1, str2) {
  return `Hi ${str1} ${str2}! What  a beautiful day`
}

// console.log(userGreeting('Kwaku', 'Adu'))
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let result = []
  for (let i = 0; i < nums.length; i++) {
    let product = target - nums[i]
    let otherProduct = target - product
    if (nums.includes(product) && nums.includes(otherProduct)) {
      result.push(product, otherProduct)
    }

  }

  return result

};

// console.log(twoSum([3, 4, 2], 6))

function maxLetters(string) {
  const max = string.length
  const expression = '. , ? !'
  let returnIndex = []
  if (max > 350) {
    const newsec = string.slice(0, 350)
    // const period = newsec.lastIndexOf('.')
    // const coma = newsec.lastIndexOf(',')
    // const question = newsec.lastIndexOf('?')
    // const important = newsec.lastIndexOf('!')


  }
  return returnIndex
  // return string
}

// console.log(maxLetters("If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph.We created the Random Paragraph Generator with you in mind.The process is quite simple.Choose the number of random paragraphs you'd like to see and click the button. Your chosen number of paragraphs will instantly appear. While it may not be obvious to everyone, there are a number of reasons creating random paragraphs can be useful. A few examples of how some people use this generator are listed in the following paragraphs."))



// function goodVsEvil(good, evil) {
//   let goods = good.split(' ')
//   let goodSum = 0
//   let evils = evil.split(' ')
//   let evilSum = 0

//   for (let i = 0; i < goods.length; i++) {
//     goodSum += Number(goods[i])
//   }

//   for (let i = 0; i < evils.length; i++) {
//     evilSum += Number(evils[i])
//   }


//   if (evilSum > goodSum) {
//     return "Battle Result: Evil eradicates all trace of Good"
//   } else if (goodSum > evilSum) {
//     return "Battle Result: Good triumphs over Evil"
//   } else {
//     return "Battle Result: No victor on this battle field"
//   }

// }

// Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.
// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
// As an added challenge, upper - and lowercase letters are considered the same character, but the function should return the correct case for the initial letter.For example, the input 'sTreSS' should return 'T'.
// If a string contains all repeating characters, it should return an empty string("");

function firstNonRepeatingLetter(s) {
  let char = {}
  let result = ''
  for (const l of s) {
    char[l.toLowerCase()] = (char[l.toLowerCase()] || 0) + 1
  }

  if (Object.values(char).indexOf(1) === -1) return ''

  for (let i = 0; i < s.length; i++) {
    let letter = s[i]
    if (char[letter.toLowerCase()] === 1) {
      result += letter
      break
    }
  }
  return result
}

console.log(firstNonRepeatingLetter('sTreSS'))

// 1e0.1e1.1e2.2e2

