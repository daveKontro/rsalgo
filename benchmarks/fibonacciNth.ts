import { createRequire } from 'module'
import { Bench } from 'tinybench'

const require = createRequire(import.meta.url)
const { fibonacci_nth } = require('../src/generated/node/algorithms.js')

const fibonacciNthTs = (n: number): number => {
  if (n < 0) {
    return 0
  } else {
    let current = 1
    let previous = 0

    if (n === 0 || n === 1) {
      current = n
    } else {
      for (let i = 1; i < n; i++) {
        current += previous
        previous = current - previous
      }
    }

    return current
  }
}

export const addTasks = ({
  bench,
  n,
}: {
  bench: Bench,
  n: number,
}) => {
  bench.add('fibonacciNth (rs)', () => {
    fibonacci_nth(n)
  })

  bench.add('fibonacciNth (ts)', () => {
    fibonacciNthTs(n)
  })
}
