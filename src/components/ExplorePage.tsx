import { NftCard } from './NftCard'
import { useNfts } from '../hooks/useNfts'
import { useState } from 'react'

const TABS = ['All', 'Art', 'PFP', 'Gaming', '1/1']

export function ExplorePage() {
  const { nfts } = useNfts()
  const [tab, setTab] = useState('All')
  return (
    <div className="max-w-7xl mx-auto px-6 pt-24 pb-10">
      <h1 className="text-2xl font-bold mb-6">Explore</h1>
      <div className="flex gap-1 bg-surface-2 p-1 rounded-xl w-fit mb-6">
        {TABS.map(t => (
          <button key={t} onClick={() => setTab(t)} className={`px-4 py-1.5 rounded-lg text-sm font-medium transition ${tab === t ? 'bg-surface-3 text-white' : 'text-gray-500'}`}>{t}</button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-3.5">
        {nfts.map((n, i) => <NftCard key={i} nft={n} index={i} />)}
      </div>
    </div>
  )
}