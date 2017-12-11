// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid (n) {
  const width = 2 * n - 1
  const midPoint = Math.floor(width / 2)
  for (let i = 0; i < n; i++) {
    let level = ''

    for (let j = 0; j < width; j++) {
      if (midPoint - i <= j && j <= midPoint + i) {
        level += '#'
      } else {
        level += ' '
      }
    }
    console.log(level)
  }
}

function pyramid2 (n, row = 0, level = '') {
  if (row === n) {
    return
  }

  if (level.length === 2 * n - 1) {
    console.log(level)
    return pyramid2(n, row + 1)
  }

  const midPoint = Math.floor((2 * n - 1) / 2)
  let add = ' '
  if (midPoint - row <= level.length && level.length <= midPoint + row) {
    add = '#'
  }
  pyramid2(n, row, level + add)
}

module.exports = pyramid
