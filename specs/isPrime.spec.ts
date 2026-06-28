import { expect } from 'chai'
import { isPrime } from '../src/node/math/isPrime'

describe('isPrime', () => {
  it('primes are detected', () => {
    expect(isPrime(2)).to.equal(true)
    expect(isPrime(3)).to.equal(true)
    expect(isPrime(4)).to.equal(false)
    expect(isPrime(5)).to.equal(true)
  })
})
