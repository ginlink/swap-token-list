import { schema, TokenList } from '@uniswap/token-lists'
import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import tokens from '../public/swap_list.json'

function validate(data: TokenList) {
  const ajv = new Ajv({ allErrors: true, verbose: true })
  addFormats(ajv)
  const validator = ajv.compile(schema)
  const valid = validator(data)
  if (valid) {
    return valid
  }
  if (validator.errors) {
    throw validator.errors.map((error) => {
      delete error.data
      return error
    })
  }
}

describe('valid token list', () => {
  it('should be valid', () => {
    expect(validate(tokens)).toBeTruthy()
  })
  // it('should not be valid', () => {
  //   expect(validate({ name: '', timestamp: '', version: { major: 0, minor: 1, patch: 1 }, tokens: [] })).not.toThrow(
  //     Error
  //   )
  // })
})
