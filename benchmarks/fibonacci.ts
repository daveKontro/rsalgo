import { createRequire } from 'module'
import { Bench } from 'tinybench'

const require = createRequire(import.meta.url)
const { fibonacci } = require('../src/generated/node/algorithms.js')

const fibonacciTs = (n: number): number[] => {
  if (n <= 0) {
    return []
  } else {
    const sequence: number[] = []

    for (let i = 0; i < n; i++) {
      if (i === 0 || i === 1) {
        sequence.push(i)
      } else {
        sequence.push(sequence[i - 1] + sequence[i - 2])
      }
    }

    return sequence
  }
}

export const addTasks = ({
  bench,
  n,
}: {
  bench: Bench,
  n: number,
}) => {
  bench.add('fibonacci (rs)', () => {
    fibonacci(n)
  })

  bench.add('fibonacci (ts)', () => {
    fibonacciTs(n)
  })
}
