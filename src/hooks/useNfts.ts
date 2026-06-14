import { useMemo } from 'react'
import { generateMockNfts } from '../services/mockData'
import type { NftItem } from '../types/nft'

export function useNfts() {
  const nfts: NftItem[] = useMemo(() => generateMockNfts(20), [])
  return { nfts, loading: false }
}