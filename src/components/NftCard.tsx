import { Link } from 'react-router-dom'
import { PriceTag } from './PriceTag'
import type { NftItem } from '../types/nft'

interface NftCardProps {
  nft: NftItem
  index?: number
}

export function NftCard({ nft, index }: NftCardProps) {
  return (
    <Link to={`/nft/${nft.mint}`} className="group block bg-surface border border-white/5 rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-white/10 transition-all duration-200">
      <div className="aspect-square relative overflow-hidden bg-surface-2">
        {nft.image ? (
          <img src={nft.image} alt={nft.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
        ) : (
          <canvas data-seed={index ?? 0} className="w-full h-full" />
        )}
        {nft.listed && <span className="absolute top-2 right-2 bg-black/55 backdrop-blur-sm px-2 py-0.5 rounded-md text-[10px] font-semibold text-accent">Listed</span>}
      </div>
      <div className="p-3">
        <p className="text-[10px] text-gray-500 uppercase tracking-wide mb-0.5">{nft.collection}</p>
        <p className="text-sm font-semibold mb-2">{nft.name}</p>
        <div className="flex justify-between items-center pt-2 border-t border-white/5">
          <PriceTag sol={nft.price} />
          <span className="text-[11px] text-gray-500">&#9825; {nft.likes}</span>
        </div>
      </div>
    </Link>
  )
}