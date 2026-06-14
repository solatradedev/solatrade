import { StatsBar } from './StatsBar'
import { NftCard } from './NftCard'
import { RankingsTable } from './RankingsTable'
import { useNfts } from '../hooks/useNfts'

export function HomePage() {
  const { nfts } = useNfts()
  return (
    <div className="max-w-7xl mx-auto px-6 pt-28 pb-10">
      <section className="text-center mb-12">
        <span className="inline-flex items-center gap-1.5 bg-accent/8 text-accent text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wide mb-5">
          <span className="w-1.5 h-1.5 bg-accent rounded-full" /> Live on Solana
        </span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-4">
          Discover, Collect &<br /><span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">Trade NFTs</span>
        </h1>
        <p className="text-gray-400 max-w-md mx-auto mb-8">A Solana NFT marketplace with fast transactions and low fees.</p>
      </section>
      <StatsBar />
      <section className="mb-16">
        <h2 className="text-xl font-bold mb-5">Trending</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-3.5">
          {nfts.slice(0, 10).map((n, i) => <NftCard key={i} nft={n} index={i} />)}
        </div>
      </section>
      <RankingsTable />
    </div>
  )
}