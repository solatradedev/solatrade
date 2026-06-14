interface Props { slug?: string }
export function CollectionBanner({ slug }: Props) {
  return (
    <div className="bg-surface border border-white/5 rounded-2xl p-8">
      <h1 className="text-2xl font-extrabold capitalize">{slug?.replace(/-/g, ' ') || 'Collection'}</h1>
      <p className="text-gray-400 text-sm mt-2">Browse items from this collection</p>
    </div>
  )
}