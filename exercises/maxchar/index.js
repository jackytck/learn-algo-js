// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar (str) {
  const charMap = {}
  let max = 0
  let maxChar = ''

  for (let c of str) {
    charMap[c] = charMap[c] + 1 || 1
  }

  for (let c in charMap) {
    if (charMap[c] > max) {
      max = charMap[c]
      maxChar = c
    }
  }

  return maxChar
}

module.exports = maxChar
