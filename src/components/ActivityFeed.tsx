export function ActivityFeed() {
  const activities = [
    { type: 'Sale', from: '8vE4...5kCt', to: 'Fn3s...RhPb', price: 2.4, time: '2h ago' },
    { type: 'List', from: '8vE4...5kCt', to: '—', price: 2.4, time: '3h ago' },
    { type: 'Transfer', from: 'DpSx...io3d', to: '8vE4...5kCt', price: 0, time: '1d ago' },
  ]
  return (
    <div className="mt-8">
      <h3 className="text-sm font-semibold mb-3">Activity</h3>
      <div className="space-y-2">
        {activities.map((a, i) => (
          <div key={i} className="flex justify-between items-center text-xs py-2 border-b border-white/5">
            <span className="text-gray-400">{a.type}</span>
            <span className="text-gray-500">{a.from} → {a.to}</span>
            {a.price > 0 && <span className="text-accent font-semibold">{a.price} SOL</span>}
            <span className="text-gray-600">{a.time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}