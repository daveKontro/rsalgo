import { createRequire } from 'module'
import { Bench } from 'tinybench'

const require = createRequire(import.meta.url)
const { is_prime } = require('../src/generated/node/algorithms.js')

const isPrimeTs = (n: number): boolean => {
  if (n < 2) {
    return false
  } else {
    let isNPrime = true

    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        isNPrime = false
        break
      }
    }

    return isNPrime
  }
}

export const addTasks = ({
  bench,
  n,
}: {
  bench: Bench,
  n: number,
}) => {
  bench.add('isPrime (rs)', () => {
    is_prime(n)
  })

  bench.add('isPrime (ts)', () => {
    isPrimeTs(n)
  })
}
