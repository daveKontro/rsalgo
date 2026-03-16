import { expect } from 'chai'
import { sum } from '../src/node/math/sum'

describe('sum', () => {
  it('returns correct sum', () => {
    const result = sum(2, 2)

    expect(result).to.equal(4)
  })
})
