import { useState, useEffect } from 'react'

export function useMint() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  return { loading, minted: 0, total: 5000 }
}