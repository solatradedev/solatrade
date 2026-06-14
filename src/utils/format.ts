export function formatSol(lamports: number): string {
  return (lamports / 1e9).toFixed(2)
}

export function formatUsd(sol: number, price = 162): string {
  return '$' + (sol * price).toFixed(0)
}

export function shortenAddress(addr: string, chars = 4): string {
  return addr.slice(0, chars) + '...' + addr.slice(-chars)
}

export function timeAgo(date: Date): string {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000)
  if (seconds < 60) return seconds + 's ago'
  if (seconds < 3600) return Math.floor(seconds / 60) + 'm ago'
  if (seconds < 86400) return Math.floor(seconds / 3600) + 'h ago'
  return Math.floor(seconds / 86400) + 'd ago'
}