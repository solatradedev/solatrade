import { Link } from 'react-router-dom'
import { WalletButton } from './WalletButton'
import { SearchModal } from './SearchModal'
import { useState } from 'react'

export function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false)
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-bg/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
        <Link to="/" className="flex items-center gap-2.5 font-extrabold text-lg tracking-tight">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent to-purple flex items-center justify-center text-black text-sm font-black">S</div>
          SolaTrade
        </Link>
        <div className="hidden md:flex gap-7">
          <Link to="/explore" className="text-sm font-medium text-gray-400 hover:text-white transition">Explore</Link>
          <Link to="/mint" className="text-sm font-medium text-gray-400 hover:text-white transition">Mint</Link>
          <a href="#rankings" className="text-sm font-medium text-gray-400 hover:text-white transition">Rankings</a>
          <button onClick={() => setSearchOpen(true)} className="text-sm font-medium text-gray-400 hover:text-white transition">Search</button>
        </div>
        <WalletButton />
      </div>
      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
    </nav>
  )
}