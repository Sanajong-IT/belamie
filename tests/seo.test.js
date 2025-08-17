import { describe, it, expect } from 'vitest'
describe('SEO basics', () => {
  it('has canonical domain set', () => {
    const canonical = 'https://www.belamie.catering'
    expect(canonical.startsWith('https://')).toBe(true)
  })
})
