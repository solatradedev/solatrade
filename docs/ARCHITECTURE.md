# SolaTrade Architecture

## Stack
- React 18 + TypeScript
- Vite 5 (build tooling)
- TailwindCSS (styling)
- Solana Web3.js + Wallet Adapter
- TanStack Query (data fetching)
- Zustand (state management)

## Directory Layout
```
src/
  components/    UI components (Navbar, NftCard, etc.)
  hooks/         Custom React hooks
  services/      API clients, Solana connection, mock data
  types/         TypeScript interfaces
  utils/         Formatting, constants
  context/       React context providers
  styles/        Global CSS + Tailwind
  assets/        Static images, fonts
```

## NFT Data Flow
1. `useNfts()` hook fetches from API or mock data
2. Components render via `NftCard`, `RankingsTable`
3. Wallet interactions via `useWallet()` hook → Phantom adapter
4. Mint via LaunchMyNFT embedded widget

## Deployment
- Vercel (auto-deploy from `main` branch)
- Domain: solatrade.xyz
