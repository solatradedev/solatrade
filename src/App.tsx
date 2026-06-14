import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { HomePage } from './components/HomePage'
import { ExplorePage } from './components/ExplorePage'
import { CollectionPage } from './components/CollectionPage'
import { MintPage } from './components/MintPage'
import { NftDetailPage } from './components/NftDetailPage'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/collection/:slug" element={<CollectionPage />} />
          <Route path="/mint" element={<MintPage />} />
          <Route path="/nft/:mint" element={<NftDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
