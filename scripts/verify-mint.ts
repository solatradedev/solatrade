/**
 * Verify a mint transaction on-chain.
 * Usage: npx tsx scripts/verify-mint.ts <txSignature>
 */
const sig = process.argv[2]
if (!sig) { console.error('Usage: npx tsx scripts/verify-mint.ts <txSignature>'); process.exit(1) }
console.log('Verifying tx:', sig)
console.log('(Stub — connect to RPC to verify)')
