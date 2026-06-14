import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js'

const NETWORK = import.meta.env.VITE_SOLANA_NETWORK || 'mainnet-beta'
const RPC_URL = import.meta.env.VITE_SOLANA_RPC_URL || clusterApiUrl(NETWORK as any)

let _connection: Connection | null = null

export function getConnection(): Connection {
  if (!_connection) {
    _connection = new Connection(RPC_URL, 'confirmed')
  }
  return _connection
}

export async function getBalance(pubkey: string): Promise<number> {
  const conn = getConnection()
  const balance = await conn.getBalance(new PublicKey(pubkey))
  return balance / 1e9
}

export async function getNftsByOwner(owner: string) {
  // Placeholder — would use Metaplex findAllByOwner in production
  return []
}