import {
  fibonacci_nth as fibonacci_nth_rs,
  fibonacci as fibonacci_rs,
} from '../../generated/algorithms.js'
import type { FibonacciSequence } from './types'
import type { Result } from '../../types/common'

export const fibonacciNth = (n: number): Result => {
  return fibonacci_nth_rs(n)
}

export const fibonacci = (n: number): FibonacciSequence => {
  return fibonacci_rs(n)
}
