import { expect } from 'chai'
import { insertionSort } from '../src/node/sort/insertionSort'

describe('insertionSort', () => {
  it('array is sorted', () => {
    const sorted = insertionSort({
      arr: [8, 20, -2, 4, -6],
    })

    expect(sorted)
      .to.deep.equal(new Int32Array([-6, -2, 4, 8, 20]))
  })
})
