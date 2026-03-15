import { expect } from 'chai'
import {
  fibonacciNth,
  fibonacci,
} from '../src/algorithms/math/fibonacci'

describe('fibonacciNth', () => {
  it('nth number is correct', () => {
    expect(fibonacciNth(0)).to.equal(0)
    expect(fibonacciNth(1)).to.equal(1)
    expect(fibonacciNth(2)).to.equal(1)
    expect(fibonacciNth(7)).to.equal(13)
    expect(fibonacciNth(18)).to.equal(2584)
  })
})

describe('fibonacci', () => {
  it('sequence is correct', () => {
    const sequence = new Int32Array([0, 1, 1, 2, 3, 5, 8, 13])

    expect(Array.from(fibonacci(8)))
      .to.deep.equal(Array.from(sequence))
  })
})