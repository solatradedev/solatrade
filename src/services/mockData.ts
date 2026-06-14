import type { NftItem } from '../types/nft'

const COLLECTIONS_RAW = [
  'Solana Spectra', 'Void Walkers', 'Pixel Realm', 'Drift Collective',
  'Neon Beasts', 'Echo Chamber', 'Prism Protocol', 'Crystal Caverns',
]

export const COLLECTIONS = [
  { name: 'Solana Spectra', floor: '1.8', volume: '$12.4K', change: '+4.2%', owners: '340', items: '2,000' },
  { name: 'Void Walkers', floor: '2.4', volume: '$8.9K', change: '+1.8%', owners: '210', items: '1,500' },
  { name: 'Pixel Realm', floor: '1.1', volume: '$6.2K', change: '-2.1%', owners: '480', items: '3,000' },
  { name: 'Drift Collective', floor: '0.5', volume: '$4.8K', change: '+11.3%', owners: '620', items: '5,000' },
  { name: 'Neon Beasts', floor: '3.2', volume: '$3.6K', change: '+0.5%', owners: '120', items: '888' },
  { name: 'Echo Chamber', floor: '0.9', volume: '$2.1K', change: '-0.8%', owners: '290', items: '2,222' },
  { name: 'Prism Protocol', floor: '1.7', volume: '$1.8K', change: '+6.7%', owners: '180', items: '1,111' },
  { name: 'Crystal Caverns', floor: '0.6', volume: '$1.2K', change: '+2.3%', owners: '410', items: '4,444' },
]

const PRICES = [0.8, 2.4, 1.1, 0.5, 3.2, 0.9, 1.7, 0.6, 1.3, 2.8, 0.4, 1.9, 0.7, 3.5, 1.4, 0.3, 2.1, 0.8, 1.6, 4.0]

export function generateMockNfts(count: number): NftItem[] {
  return Array.from({ length: count }, (_, i) => {
    const col = COLLECTIONS_RAW[i % COLLECTIONS_RAW.length]
    const id = (1000 + i * 347 + i * i * 13) % 9999
    return {
      mint: `${col.replace(/\s/g, '').toLowerCase()}${id}`,
      name: `${col.split(' ')[0]} #${id}`,
      collection: col,
      image: null,
      price: PRICES[i % PRICES.length],
      usd: Math.round(PRICES[i % PRICES.length] * 162),
      likes: 3 + ((i * 7 + 5) % 48),
      listed: i % 4 === 1,
      owner: '8vE4' + '0'.repeat(36) + '5kCt',
      attributes: [
        { trait_type: 'Background', value: ['Midnight', 'Aurora', 'Void', 'Nebula'][i % 4] },
        { trait_type: 'Rarity', value: ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary'][i % 5] },
      ],
    }
  })
}