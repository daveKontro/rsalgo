import {
  fibonacci_nth as fibonacci_nth_rs,
  fibonacci as fibonacci_rs,
} from '../../generated/browser/algorithms.js'
import type {
  Result,
  FibonacciSequence,
} from '../../types/types.js'

export const fibonacciNth = (n: number): Result => {
  return fibonacci_nth_rs(n)
}

export const fibonacci = (n: number): FibonacciSequence => {
  return fibonacci_rs(n)
}
