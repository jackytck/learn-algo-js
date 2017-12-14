// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib (n) {
  let a = 0
  let b = 1
  for (let i = 2; i <= n; i++) {
    const tmp = a + b
    a = b
    b = tmp
  }
  return b
}

function fib2 (n) {
  const result = [0, 1]
  for (let i = 2; i <= n; i++) {
    result.push(result[i - 2] + result[i - 1])
  }
  return result[n]
}

function fib3 (n) {
  if (n < 2) {
    return n
  }
  return fib3(n - 2) + fib3(n - 1)
}

module.exports = fib
