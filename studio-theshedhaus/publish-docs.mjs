import {createClient} from '@sanity/client'
import * as fs from 'fs'

const config = JSON.parse(fs.readFileSync('./sanity.json', 'utf-8'))

const client = createClient({
  projectId: config.api.projectId,
  dataset: config.api.dataset,
  apiVersion: '2025-01-31',
  useCdn: false,
})

const docsToPublish = ['90vpD26GodOn15IIylZkXE', '90vpD26GodOn15IIylZkXy', '90vpD26GodOn15IIylZkYi']

async function publishDocs() {
  try {
    console.log('Publishing documents...\n')
    for (const docId of docsToPublish) {
      try {
        // Fetch the draft document
        const doc = await client.getDocument(docId)
        if (!doc) {
          console.warn(`⚠️  Draft document not found: ${docId}`)
          continue
        }

        // Create the published version
        const publishedDoc = await client.create({
          ...doc,
          _id: doc._id.replace(/^drafts\./, ''), // Remove drafts prefix if it exists
        })

        console.log(`✅ Published: ${publishedDoc._type} (${publishedDoc._id})`)
      } catch (error) {
        console.error(`❌ Error publishing ${docId}:`, error.message)
      }
    }
    console.log('\n✨ Publishing complete!')
  } catch (error) {
    console.error('Error:', error.message)
    process.exit(1)
  }
}

publishDocs()
