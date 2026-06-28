import { expect } from 'chai'
import { quickSort } from '../src/node/sort/quickSort'

describe('quickSort', () => {
  it('array is sorted', () => {
    const sorted = quickSort({
      arr: [8, 20, -2, 4, -6],
    })

    expect(sorted)
      .to.deep.equal(new Int32Array([-6, -2, 4, 8, 20]))
  })
})
