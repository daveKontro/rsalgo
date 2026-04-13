import { expect } from 'chai'
import { bubbleSort } from '../src/node/sort/bubbleSort'

describe('bubbleSort', () => {
  it('array is sorted', () => {
    const sorted = bubbleSort({
      arr: [8, 11, -1, 5, -9],
    })

    expect(sorted)
      .to.deep.equal(new Int32Array([-9, -1, 5, 8, 11]))
  })
})
