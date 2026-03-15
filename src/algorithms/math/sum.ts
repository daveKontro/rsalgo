import { sum as sum_rs } from '../../generated/algorithms.js'
import type { Result } from '../../types/common'

export const sum = (left: number, right: number): Result => {
  return sum_rs(left, right)
}
