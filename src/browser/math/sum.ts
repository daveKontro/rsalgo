import { sum as sum_rs } from '../../generated/browser/algorithms.js'
import type { Result } from '../../types'

export const sum = (left: number, right: number): Result => {
  return sum_rs(left, right)
}
