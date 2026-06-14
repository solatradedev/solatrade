import { useParams } from 'react-router-dom'
import { useNftDetail } from '../hooks/useNftDetail'
import { PriceTag } from './PriceTag'
import { ActivityFeed } from './ActivityFeed'

export function NftDetailPage() {
  const { mint } = useParams()
  const { nft, loading } = useNftDetail(mint)
  if (loading || !nft) return <div className="max-w-7xl mx-auto px-6 pt-24"><p className="text-gray-500">Loading...</p></div>
  return (
    <div className="max-w-7xl mx-auto px-6 pt-24 pb-10">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="aspect-square bg-surface-2 rounded-2xl overflow-hidden border border-white/5">
          {nft.image ? <img src={nft.image} alt={nft.name} className="w-full h-full object-cover" /> : <canvas data-seed={42} className="w-full h-full" />}
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{nft.collection}</p>
          <h1 className="text-3xl font-extrabold mb-4">{nft.name}</h1>
          <PriceTag sol={nft.price} />
          <div className="mt-8 space-y-3">
            <button className="w-full bg-accent text-black font-bold py-3 rounded-xl hover:bg-accent/90 transition">Buy Now</button>
            <button className="w-full bg-surface-2 border border-white/8 font-semibold py-3 rounded-xl hover:border-white/15 transition">Make Offer</button>
          </div>
          <ActivityFeed />
        </div>
      </div>
    </div>
  )
}