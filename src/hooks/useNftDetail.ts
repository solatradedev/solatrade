import { useMemo } from 'react'
import { generateMockNfts } from '../services/mockData'
import type { NftItem } from '../types/nft'

export function useNftDetail(mint?: string) {
  const nft: NftItem | null = useMemo(() => {
    const all = generateMockNfts(20)
    return all.find(n => n.mint === mint) || all[0]
  }, [mint])
  return { nft, loading: false }
}