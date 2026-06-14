import { COLLECTIONS } from '../services/mockData'

export function RankingsTable() {
  return (
    <section id="rankings" className="mb-10">
      <h2 className="text-xl font-bold mb-5">Top Collections</h2>
      <div className="bg-surface border border-white/5 rounded-2xl overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead><tr className="text-[11px] text-gray-500 uppercase tracking-wide">
            <th className="text-left py-3 px-5">#</th><th className="text-left py-3">Collection</th><th className="text-left py-3">Floor</th><th className="text-left py-3">Vol (24h)</th><th className="text-left py-3">24h</th><th className="text-left py-3">Items</th>
          </tr></thead>
          <tbody>
            {COLLECTIONS.map((c, i) => (
              <tr key={i} className="border-t border-white/5 hover:bg-white/[0.015] text-sm">
                <td className="py-3 px-5 text-gray-500">{i + 1}</td>
                <td className="py-3 font-semibold">{c.name}</td>
                <td className="py-3 font-semibold">{c.floor} SOL</td>
                <td className="py-3">{c.volume}</td>
                <td className={`py-3 font-semibold ${c.change.startsWith('+') ? 'text-accent' : 'text-red-400'}`}>{c.change}</td>
                <td className="py-3">{c.items}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}