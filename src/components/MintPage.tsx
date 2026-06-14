import { useMint } from '../hooks/useMint'

export function MintPage() {
  const { loading } = useMint()
  return (
    <div className="max-w-7xl mx-auto px-6 pt-24 pb-10">
      <div className="bg-surface border border-white/5 rounded-3xl p-12 text-center relative overflow-hidden">
        <div className="absolute w-[500px] h-[500px] -top-64 left-1/2 -translate-x-1/2 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-2xl font-extrabold mb-2">Mint Your NFT</h2>
          <p className="text-gray-400 text-sm mb-6">Join the collection — mint directly on Solana.</p>
          <div id="mint-button-container" />
          <div id="mint-counter" className="text-gray-500 text-xs mt-3" />
        </div>
      </div>
    </div>
  )
}