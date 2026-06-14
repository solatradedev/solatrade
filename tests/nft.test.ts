import { describe, it, expect } from 'vitest'
import { generateMockNfts } from '../src/services/mockData'

describe('generateMockNfts', () => {
  it('generates the requested count', () => {
    const nfts = generateMockNfts(10)
    expect(nfts).toHaveLength(10)
  })

  it('each nft has required fields', () => {
    const [nft] = generateMockNfts(1)
    expect(nft.mint).toBeDefined()
    expect(nft.name).toBeDefined()
    expect(nft.price).toBeGreaterThan(0)
  })
})