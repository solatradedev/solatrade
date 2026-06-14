interface PriceTagProps { sol: number }

export function PriceTag({ sol }: PriceTagProps) {
  const usd = (sol * 162).toFixed(0)
  return (
    <span className="text-xs font-bold text-accent">
      {sol} SOL
      <span className="text-gray-500 font-normal ml-1">${usd}</span>
    </span>
  )
}