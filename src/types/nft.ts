export interface NftItem {
  mint: string
  name: string
  collection: string
  image: string | null
  price: number
  usd: number
  likes: number
  listed: boolean
  owner: string
  attributes: NftAttribute[]
}

export interface NftAttribute {
  trait_type: string
  value: string
}

export interface Collection {
  name: string
  slug: string
  floor: number
  volume: string
  change: string
  owners: string
  items: string
  image: string | null
}