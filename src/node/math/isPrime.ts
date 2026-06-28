import { is_prime as is_prime_rs } from '../../generated/node/algorithms.js'

export const isPrime = (n: number): boolean => {
  return is_prime_rs(n)
}
