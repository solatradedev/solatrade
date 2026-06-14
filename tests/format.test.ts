import { describe, it, expect } from 'vitest'
import { shortenAddress, formatSol } from '../src/utils/format'

describe('shortenAddress', () => {
  it('shortens correctly', () => {
    expect(shortenAddress('DpSxSDY7Xknf6VwfQ9ybWXgwWc4rEm7XVu8yB3QEio3d')).toBe('DpSx...io3d')
  })
})

describe('formatSol', () => {
  it('converts lamports to SOL', () => {
    expect(formatSol(1_500_000_000)).toBe('1.50')
  })
})