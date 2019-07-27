// Euler #1 - finding the sum of all multiples of 3 and 5 below 1000
// the answer we want is 233168 and both methods deliver this

/* method one - what came to mind first but it seems like it might take longer
walking from 1 to 1000 and checking if each number is a multiple of 3 or 5
but we know there are plenty of numbers on the way that won't be multiples of
three or five */
const sumArray = (accum, num) => accum + num
var numberSet = []

function walkGrand () {
  for (let i = 3; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      numberSet.push(i)
    }
  }

  return numberSet.reduce(sumArray, 0)
}

console.log(walkGrand())

/* method two - adding the multiples of three and five unless / until
3n reaches 1000, but then we have to check to make sure we aren't double-counting
multiples of 15 */
var sumOfNums = 0

function stepGrand () {
  for (let i = 1; i < 334; i++) {
    sumOfNums += (i * 3)
    if (i < 67) {
      sumOfNums -= (15 * i)
    }
    if (i < 200) {
      sumOfNums += (i * 5)
    }
  }
  return sumOfNums
}

console.log(stepGrand())

// I compared these two methods on jsbench.me and they had comparable runtimes for both 1000 and 10000
