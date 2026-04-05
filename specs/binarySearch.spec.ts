import { expect } from 'chai'
import { binarySearch } from '../src/node/search/binarySearch'

describe('binarySearch', () => {
  it('indexes are found', () => {
    const arr = [-5, 2, 4, 6, 10]

    const resultTargetTen = binarySearch({
      arr,
      target: 10,
    })

    const resultTargetSix = binarySearch({
      arr,
      target: 6,
    })

    const resultTargetEleven = binarySearch({
      arr,
      target: 11,
    })

    expect(resultTargetTen).to.equal(4)
    expect(resultTargetSix).to.equal(3)
    expect(resultTargetEleven).to.equal(-1)
  })
})
