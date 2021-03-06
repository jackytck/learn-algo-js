// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps (n) {
  for (let i = 0; i < n; i++) {
    let stair = ''
    for (let j = 0; j < n; j++) {
      stair += j <= i ? '#' : ' '
    }
    console.log(stair)
  }
}

function steps2 (n, row = 0, stair = '') {
  if (n === row) {
    return
  }

  if (n === stair.length) {
    console.log(stair)
    return steps2(n, row + 1)
  }

  stair += stair.length <= row ? '#' : ' '
  steps(n, row, stair)
}

module.exports = steps2
