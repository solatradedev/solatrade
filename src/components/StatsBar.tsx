interface Stat { value: string; label: string; color: 'accent' | 'purple' }

const stats: Stat[] = [
  { value: '3.2K', label: 'NFTs Listed', color: 'accent' },
  { value: '$284K', label: 'Total Volume', color: 'purple' },
  { value: '1.4K', label: 'Traders', color: 'accent' },
  { value: '~1s', label: 'Avg Settlement', color: 'purple' },
]

export function StatsBar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 border border-white/5 rounded-2xl overflow-hidden mb-14">
      {stats.map((s, i) => (
        <div key={i} className="bg-surface text-center py-5 border-b md:border-b-0 md:border-r border-white/5 last:border-0">
          <p className={`text-xl font-extrabold ${s.color === 'accent' ? 'text-accent' : 'text-purple-400'}`}>{s.value}</p>
          <p className="text-[11px] text-gray-500 uppercase tracking-widest mt-1">{s.label}</p>
        </div>
      ))}
    </div>
  )
}