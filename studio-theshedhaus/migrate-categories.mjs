import {createClient} from '@sanity/client'
import * as fs from 'fs'
import path from 'path'
import {fileURLToPath} from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const client = createClient({
  projectId: 'u62fmbuz',
  dataset: 'production',
  apiVersion: '2026-05-15',
  useCdn: false,
  token: process.env.SANITY_AUTH_TOKEN,
})

if (!process.env.SANITY_AUTH_TOKEN) {
  console.error('❌ SANITY_AUTH_TOKEN environment variable is not set')
  process.exit(1)
}

async function migrateCategories() {
  console.log('🔄 Fetching all products...')

  // Fetch all products where category is a string
  const products = await client.fetch(`
    *[_type == "productPage"] {
      _id,
      _rev,
      productName,
      category
    }
  `)

  console.log(`📦 Found ${products.length} products\n`)

  let migratedCount = 0
  let skippedCount = 0

  for (const product of products) {
    try {
      // Check if category is already an array
      if (Array.isArray(product.category)) {
        console.log(`⏭️  Skipped: ${product.productName} (already an array)`)
        skippedCount++
        continue
      }

      // Convert string to array
      const updatedProduct = {
        ...product,
        category: [product.category],
      }

      // Patch the document
      await client
        .patch(product._id)
        .set({category: [product.category]})
        .commit()

      console.log(`✅ Migrated: ${product.productName}`)
      console.log(`   ${product.category} → [${product.category}]\n`)
      migratedCount++
    } catch (error) {
      console.error(`❌ Failed to migrate: ${product.productName}`)
      console.error(`   Error: ${error.message}\n`)
    }
  }

  console.log('📊 Migration Summary:')
  console.log(`   ✅ Migrated: ${migratedCount}`)
  console.log(`   ⏭️  Already arrays: ${skippedCount}`)
  console.log(`   📦 Total: ${products.length}`)
  console.log('\n✨ Migration complete!')
  process.exit(0)
}

migrateCategories().catch((error) => {
  console.error('🔥 Fatal error:', error)
  process.exit(1)
})
