import { is_prime as is_prime_rs } from '../../generated/browser/algorithms.js'

export const isPrime = (n: number): boolean => {
  return is_prime_rs(n)
}
