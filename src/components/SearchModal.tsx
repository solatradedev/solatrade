import { useState, useRef, useEffect } from 'react'

interface SearchModalProps { onClose: () => void }

export function SearchModal({ onClose }: SearchModalProps) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => { inputRef.current?.focus() }, [])

  return (
    <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-[20vh]" onClick={onClose}>
      <div className="w-full max-w-lg bg-surface-2 border border-white/8 rounded-2xl p-4" onClick={e => e.stopPropagation()}>
        <input ref={inputRef} value={query} onChange={e => setQuery(e.target.value)} placeholder="Search NFTs, collections, wallets..." className="w-full bg-transparent text-white outline-none text-sm placeholder-gray-500" />
        {query.length > 0 && <p className="text-xs text-gray-500 mt-3 px-1">No results for "{query}"</p>}
      </div>
    </div>
  )
}