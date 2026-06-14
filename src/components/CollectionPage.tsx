import { useParams } from 'react-router-dom'
import { CollectionBanner } from './CollectionBanner'
import { NftCard } from './NftCard'
import { useNfts } from '../hooks/useNfts'

export function CollectionPage() {
  const { slug } = useParams()
  const { nfts } = useNfts()
  const filtered = nfts.filter(n => n.collection.toLowerCase().replace(/\s+/g, '-') === slug)
  return (
    <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
      <CollectionBanner slug={slug} />
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-3.5 mt-8">
        {(filtered.length ? filtered : nfts.slice(0, 8)).map((n, i) => <NftCard key={i} nft={n} index={i} />)}
      </div>
    </div>
  )
}