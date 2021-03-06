/* global describe, it */

import assert from 'assert'
import format from '../src/lib/formatters/index.js'

describe('JSON formatter', () => {
  it('given an undefined payload, should return an empty JSON object', () => {
    const {
      contentType,
      value,
    } = format('json')
    assert.strictEqual(contentType, 'application/json')
    assert.strictEqual(value, '{}')
  })
  it('given a null payload, should return an empty JSON object', () => {
    const {
      contentType,
      value,
    } = format('json')
    assert.strictEqual(contentType, 'application/json')
    assert.strictEqual(value, '{}')
  })
  it('given a primitive value, should return the stringified version of the value', () => {
    const {
      contentType,
      value,
    } = format('json', 490)
    assert.strictEqual(contentType, 'application/json')
    assert.strictEqual(value, '490')
  })
  it('given an object value, should return the stringified JSON version of the value', () => {
    const {
      contentType,
      value,
    } = format('json', {
      a : 1,
      b : 2,
    })
    assert.strictEqual(contentType, 'application/json')
    assert.strictEqual(value, '{"a":1,"b":2}')
  })
  it('given an array value, should return the stringified JSON version of the value', () => {
    const {
      contentType,
      value,
    } = format('json', [
      {
        a : 1,
        b : {
          c : 'a',
          d : 'e',
        },
      },
    ])
    assert.strictEqual(contentType, 'application/json')
    assert.strictEqual(value, '[{"a":1,"b":{"c":"a","d":"e"}}]')
  })
})
describe('URL Encoded', () => {
  it('given an undefined payload, should return an empty string', () => {
    const {
      contentType,
      value,
    } = format('urlencoded')
    assert.strictEqual(contentType, 'application/x-www-form-urlencoded')
    assert.strictEqual(value, '')
  })
  it('given a null payload, should return an empty string', () => {
    const {
      contentType,
      value,
    } = format('urlencoded', null)
    assert.strictEqual(contentType, 'application/x-www-form-urlencoded')
    assert.strictEqual(value, '')
  })
  it('given a primitive value, should return an empty string', () => {
    const {
      contentType,
      value,
    } = format('urlencoded', 17)
    assert.strictEqual(contentType, 'application/x-www-form-urlencoded')
    assert.strictEqual(value, '')
  })
  it('given an object value, should return the query string', () => {
    const {
      contentType,
      value,
    } = format('urlencoded', {
      a : 1,
      b : 2,
    })
    assert.strictEqual(contentType, 'application/x-www-form-urlencoded')
    assert.strictEqual(value, 'a=1&b=2')
  })
  it('given an array value, should return the query string', () => {
    const {
      contentType,
      value,
    } = format('urlencoded', [{
      a : 1,
    }, {
      b : 2,
    }])
    assert.strictEqual(contentType, 'application/x-www-form-urlencoded')
    assert.strictEqual(value, '0=&1=')
  })
})
