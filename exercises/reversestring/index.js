// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse (str) {
  return str.split('').reverse().join('')
}

function reverse2 (str) {
  let reversed = ''
  for (let c of str) {
    reversed = c + reversed
  }
  return reversed
}

function reverse3 (str) {
  return str.split('').reduce((reversed, c) => c + reversed, '')
}

module.exports = reverse
