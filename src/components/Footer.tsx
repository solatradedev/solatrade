import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t border-white/5 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-500">&copy; 2025 SolaTrade. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="https://twitter.com" className="text-xs text-gray-500 hover:text-white">Twitter</a>
          <a href="https://discord.com" className="text-xs text-gray-500 hover:text-white">Discord</a>
          <Link to="/docs" className="text-xs text-gray-500 hover:text-white">Docs</Link>
          <a href="#" className="text-xs text-gray-500 hover:text-white">Terms</a>
        </div>
      </div>
    </footer>
  )
}