import { describe, it, expect } from 'vitest'
import generateTypes from '../src/index'

const testcase = {
  given: import('./fixtures/content-types.json'),
  expected: import('./fixtures/openapi-spec.json'),
}

describe('openapi-typescript test', () => {
  it('should generate openapi specification v. 3.1.1 from contentful json export', async () => {
    const { given, expected } = testcase

    const givenResolved = (await given).default
    const expectedResult = (await expected).default

    const result = generateTypes(givenResolved)

    expect(result).toEqual(expectedResult)
  })
})
