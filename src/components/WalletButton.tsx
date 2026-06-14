import { useWallet } from '../hooks/useWallet'

export function WalletButton() {
  const { connected, address, connect, disconnect } = useWallet()
  return connected ? (
    <button onClick={disconnect} className="px-4 py-2 text-xs font-semibold bg-surface-2 border border-white/8 rounded-xl text-gray-300 hover:text-white transition">
      {address?.slice(0, 4)}...{address?.slice(-4)}
    </button>
  ) : (
    <button onClick={connect} className="px-4 py-2 text-xs font-semibold bg-accent text-black rounded-xl hover:bg-accent/90 transition">
      Connect Wallet
    </button>
  )
}