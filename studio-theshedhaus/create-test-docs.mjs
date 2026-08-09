import {createClient} from 'next-sanity'

// Configure Sanity client with your project credentials
const client = createClient({
  projectId: 'u62fmbuz',
  dataset: 'production',
  apiVersion: '2025-01-31',
  useCdn: false,
  token: process.env.SANITY_AUTH_TOKEN, // You'll need to set this env var
})

// Test documents to create
const testDocs = {
  ourProcessPage: {
    _type: 'ourProcessPage',
    seo: {
      title: 'Our Process | The Shed Haus',
      description:
        'Learn how The Shed Haus builds premium structures from consultation to delivery',
      slug: {
        _type: 'slug',
        current: 'our-process',
      },
      socialImage: {
        _type: 'image',
        asset: {_ref: 'image-placeholder'}, // You'll need real image refs
        alt: 'The Shed Haus Process',
      },
    },
    pageTitle: 'Our Process',
    pageDescription: [
      {
        _type: 'block',
        _key: 'desc1',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 'span',
            text: 'Learn how we build premium structures from consultation to delivery',
            marks: [],
          },
        ],
      },
    ],
    steps: [
      {
        _type: 'processStep',
        _key: 'step1',
        title: 'Explore & Select Your Style',
        description: [
          {
            _type: 'block',
            _key: 'p1',
            markDefs: [],
            children: [
              {
                _type: 'span',
                _key: 'span1',
                text: 'Whether you are browsing our unlocked, 24/7 open display lot on Route 22 in Pawling or testing configurations online, your project starts with finding the right blueprint.',
                marks: [],
              },
            ],
          },
        ],
        order: 1,
        icon: {_type: 'image', asset: {_ref: 'image-placeholder'}, alt: 'Explore Style'},
      },
      {
        _type: 'processStep',
        _key: 'step2',
        title: 'Get Transparent Pricing Instantly',
        description: [
          {
            _type: 'block',
            _key: 'p2',
            markDefs: [],
            children: [
              {
                _type: 'span',
                _key: 'span2',
                text: "We don't believe in hidden fees or high-pressure sales tactics.",
                marks: [],
              },
            ],
          },
        ],
        order: 2,
        icon: {_type: 'image', asset: {_ref: 'image-placeholder'}, alt: 'Pricing'},
      },
      {
        _type: 'processStep',
        _key: 'step3',
        title: 'Site Foundation & Stone Pad Preparation',
        description: [
          {
            _type: 'block',
            _key: 'p3',
            markDefs: [],
            children: [
              {
                _type: 'span',
                _key: 'span3',
                text: 'A premium structure is only as reliable as its foundation.',
                marks: [],
              },
            ],
          },
        ],
        order: 3,
        icon: {_type: 'image', asset: {_ref: 'image-placeholder'}, alt: 'Foundation'},
      },
      {
        _type: 'processStep',
        _key: 'step4',
        title: 'Procurement & Quality Control',
        description: [
          {
            _type: 'block',
            _key: 'p4',
            markDefs: [],
            children: [
              {
                _type: 'span',
                _key: 'span4',
                text: 'We coordinate directly with our top-tier regional structure manufacturers.',
                marks: [],
              },
            ],
          },
        ],
        order: 4,
        icon: {_type: 'image', asset: {_ref: 'image-placeholder'}, alt: 'Quality'},
      },
      {
        _type: 'processStep',
        _key: 'step5',
        title: 'Transport Logistics & Precision Placement',
        description: [
          {
            _type: 'block',
            _key: 'p5',
            markDefs: [],
            children: [
              {
                _type: 'span',
                _key: 'span5',
                text: 'Final delivery is executed by our experienced transport logistics team.',
                marks: [],
              },
            ],
          },
        ],
        order: 5,
        icon: {_type: 'image', asset: {_ref: 'image-placeholder'}, alt: 'Delivery'},
      },
    ],
  },

  faqPage: {
    _type: 'faqPage',
    seo: {
      title: 'Frequently Asked Questions | The Shed Haus',
      description:
        'Common questions about The Shed Haus structures, delivery, warranties, and financing options',
      slug: {
        _type: 'slug',
        current: 'faq',
      },
      socialImage: {
        _type: 'image',
        asset: {_ref: 'image-placeholder'},
        alt: 'FAQ',
      },
    },
    pageTitle: 'Frequently Asked Questions',
    pageDescription: [
      {
        _type: 'block',
        _key: 'desc1',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 'span',
            text: 'Find answers to common questions about our structures, delivery, warranties, and more.',
            marks: [],
          },
        ],
      },
    ],
    faqs: [
      {
        _type: 'faqItem',
        _key: 'faq1',
        question: 'Do you offer shipping?',
        answer: [
          {
            _type: 'block',
            _key: 'a1',
            markDefs: [],
            children: [
              {
                _type: 'span',
                _key: 's1',
                text: 'Yes, we offer shipping on our structures for a nominal charge based on your delivery location.',
                marks: [],
              },
            ],
          },
        ],
      },
      {
        _type: 'faqItem',
        _key: 'faq2',
        question: 'Do you move sheds?',
        answer: [
          {
            _type: 'block',
            _key: 'a2',
            markDefs: [],
            children: [
              {
                _type: 'span',
                _key: 's2',
                text: 'We are able to perform the service of moving a shed or structure as long as it is Amish made.',
                marks: [],
              },
            ],
          },
        ],
      },
      {
        _type: 'faqItem',
        _key: 'faq3',
        question: 'Can I get a Shed with Vinyl Siding?',
        answer: [
          {
            _type: 'block',
            _key: 'a3',
            markDefs: [],
            children: [
              {
                _type: 'span',
                _key: 's3',
                text: 'Yes, we do offer sheds with vinyl siding.',
                marks: [],
              },
            ],
          },
        ],
      },
      {
        _type: 'faqItem',
        _key: 'faq4',
        question: 'Do I need a permit for my shed?',
        answer: [
          {
            _type: 'block',
            _key: 'a4',
            markDefs: [],
            children: [
              {
                _type: 'span',
                _key: 's4',
                text: 'Every town has their own requirements.',
                marks: [],
              },
            ],
          },
        ],
      },
      {
        _type: 'faqItem',
        _key: 'faq5',
        question: 'What is included in my delivery?',
        answer: [
          {
            _type: 'block',
            _key: 'a5',
            markDefs: [],
            children: [
              {
                _type: 'span',
                _key: 's5',
                text: 'Your delivery charge includes the use of our truck and trailer.',
                marks: [],
              },
            ],
          },
        ],
      },
    ],
  },

  aboutPage: {
    _type: 'aboutPage',
    seo: {
      title: 'About The Shed Haus',
      description:
        'Meet the expert team behind The Shed Haus. Locally owned and committed to premium outdoor structures',
      slug: {
        _type: 'slug',
        current: 'about',
      },
      socialImage: {
        _type: 'image',
        asset: {_ref: 'image-placeholder'},
        alt: 'About The Shed Haus',
      },
    },
    pageTitle: 'About The Shed Haus',
    pageDescription: [
      {
        _type: 'block',
        _key: 'desc1',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 'span1',
            text: "Locally owned, personally invested. We don't just sell structures—we partner with you from design through delivery",
            marks: [],
          },
        ],
      },
    ],
    teamMembers: [
      {
        _type: 'teamMember',
        _key: 'team1',
        name: 'Christine',
        title: 'Customer Service Liaison',
        image: {_type: 'image', asset: {_ref: 'image-placeholder'}, alt: 'Christine'},
        details: [
          {
            _type: 'object',
            _key: 'detail1',
            leadText: 'Expertise',
            bodyText:
              'Deep background in regional building materials and practical structural solutions.',
          },
          {
            _type: 'object',
            _key: 'detail2',
            leadText: 'Role',
            bodyText:
              'Your primary advocate from initial inquiry to scheduling, ensuring every technical question is answered with absolute clarity and respect.',
          },
        ],
      },
      {
        _type: 'teamMember',
        _key: 'team2',
        name: 'Cal',
        title: 'Customer Support Agent',
        image: {_type: 'image', asset: {_ref: 'image-placeholder'}, alt: 'Cal'},
        details: [
          {
            _type: 'object',
            _key: 'detail1',
            leadText: 'Expertise',
            bodyText: 'Creative concept mapping and structural aesthetic design.',
          },
          {
            _type: 'object',
            _key: 'detail2',
            leadText: 'Role',
            bodyText:
              'Brings a sharp eye for visual balance to help turn your backyard layout goals into a high-functioning reality.',
          },
        ],
      },
      {
        _type: 'teamMember',
        _key: 'team3',
        name: 'Kathleen',
        title: 'Chief Operations Officer',
        image: {_type: 'image', asset: {_ref: 'image-placeholder'}, alt: 'Kathleen'},
        details: [
          {
            _type: 'object',
            _key: 'detail1',
            leadText: 'Expertise',
            bodyText:
              'Construction project management, complex site logistics, and structural problem-solving.',
          },
          {
            _type: 'object',
            _key: 'detail2',
            leadText: 'Role',
            bodyText:
              'Bridges field knowledge with operations. Kathleen is frequently on-site overseeing complex builds.',
          },
        ],
      },
      {
        _type: 'teamMember',
        _key: 'team4',
        name: 'Tony',
        title: 'Ground & Logistics Crew Head',
        image: {_type: 'image', asset: {_ref: 'image-placeholder'}, alt: 'Tony'},
        details: [
          {
            _type: 'object',
            _key: 'detail1',
            leadText: 'Expertise',
            bodyText: 'Precision delivery and transport.',
          },
          {
            _type: 'object',
            _key: 'detail2',
            leadText: 'Role',
            bodyText:
              'Assessment and planning of shed delivery to ensure your shed lands safely exactly where you want it.',
          },
        ],
      },
      {
        _type: 'teamMember',
        _key: 'team5',
        name: 'Jason',
        title: 'Foundation Foreman',
        image: {_type: 'image', asset: {_ref: 'image-placeholder'}, alt: 'Jason'},
        details: [
          {
            _type: 'object',
            _key: 'detail1',
            leadText: 'Expertise',
            bodyText: 'Foundation construction for outdoor structures.',
          },
          {
            _type: 'object',
            _key: 'detail2',
            leadText: 'Role',
            bodyText:
              'Brings years of heavy landscaping experience and a meticulous eye to every installation.',
          },
        ],
      },
    ],
  },
}

async function createTestDocs() {
  try {
    console.log('🚀 Starting to create test documents...\n')

    // Check if auth token is set
    if (!process.env.SANITY_AUTH_TOKEN) {
      console.error('❌ Error: SANITY_AUTH_TOKEN not set')
      console.log('\nTo create documents, set your auth token:')
      console.log('export SANITY_AUTH_TOKEN="your-token-here"')
      console.log('\nGet a token from: https://manage.sanity.io/projects/u62fmbuz/settings/api')
      process.exit(1)
    }

    // Create Our Process Page
    console.log('Creating Our Process Page...')
    const ourProcessResult = await client.create(testDocs.ourProcessPage)
    console.log('✅ Our Process Page created:', ourProcessResult._id, '\n')

    // Create FAQ Page
    console.log('Creating FAQ Page...')
    const faqResult = await client.create(testDocs.faqPage)
    console.log('✅ FAQ Page created:', faqResult._id, '\n')

    // Create About Page
    console.log('Creating About Page...')
    const aboutResult = await client.create(testDocs.aboutPage)
    console.log('✅ About Page created:', aboutResult._id, '\n')

    console.log('✨ All test documents created successfully!\n')
    console.log('Next steps:')
    console.log('1. Add placeholder images in Sanity Studio at http://localhost:3333')
    console.log('2. Publish all documents')
    console.log('3. Test in Next.js: npm run dev in nextjs-theshedhaus/')
    console.log('4. Visit http://localhost:3000/about/our-process, /faq, /about')
  } catch (error) {
    console.error('❌ Error creating documents:', error.message)
    process.exit(1)
  }
}

createTestDocs()
