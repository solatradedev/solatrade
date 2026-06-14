/**
 * Seed script — populates local dev DB with mock collection data.
 * Run: npx tsx scripts/seed-collections.ts
 */
import { COLLECTIONS } from '../src/services/mockData'

async function seed() {
  console.log('Seeding', COLLECTIONS.length, 'collections...')
  for (const c of COLLECTIONS) {
    console.log(' -', c.name, '| floor:', c.floor, 'SOL')
  }
  console.log('Done. (Dry run — no DB connected)')
}

seed().catch(console.error)
