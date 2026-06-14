import { useState, useCallback } from 'react'

export function useWallet() {
  const [connected, setConnected] = useState(false)
  const [address, setAddress] = useState<string | null>(null)

  const connect = useCallback(async () => {
    const provider = (window as any).phantom?.solana
    if (!provider) { window.open('https://phantom.app/', '_blank'); return }
    const resp = await provider.connect()
    setAddress(resp.publicKey.toString())
    setConnected(true)
  }, [])

  const disconnect = useCallback(() => {
    (window as any).phantom?.solana?.disconnect()
    setConnected(false)
    setAddress(null)
  }, [])

  return { connected, address, connect, disconnect }
}