import { expect } from 'chai'
import { mergeSort } from '../src/node/sort/mergeSort'

describe('mergeSort', () => {
  it('array is sorted', () => {
    const sorted = mergeSort({
      arr: [5, 3, 8, 1, 2],
    })

    expect(sorted)
      .to.deep.equal(new Int32Array([1, 2, 3, 5, 8]))
  })
})
