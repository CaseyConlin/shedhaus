// Reusable GROQ fragments for common queries
export const SEO_FRAGMENT = `
  seo {
    title,
    description,
    slug,
    socialImage {
      asset -> {
        url
      },
      alt
    }
  }
`;

export const TEAM_MEMBER_FRAGMENT = `
  {
    name,
    title,
    image {
      asset -> {
        url
      },
      alt
    },
    details[] {
      leadText,
      bodyText
    }
  }
`;

export const PROCESS_STEP_FRAGMENT = `
  {
    title,
    description,
    order,
    icon {
      asset -> {
        url
      },
      alt
    }
  }
`;

export const FAQ_ITEM_FRAGMENT = `
  {
    question,
    answer
  }
`;

// Page queries
export const OUR_PROCESS_PAGE_QUERY = `
  *[_type == "ourProcessPage"][0] {
    ${SEO_FRAGMENT},
    pageTitle,
    pageDescription,
    steps | order(order asc) [] ${PROCESS_STEP_FRAGMENT}
  }
`;

export const FAQ_PAGE_QUERY = `
  *[_type == "faqPage"][0] {
    ${SEO_FRAGMENT},
    pageTitle,
    pageDescription,
    faqs[] ${FAQ_ITEM_FRAGMENT}
  }
`;

export const ABOUT_PAGE_QUERY = `
  *[_type == "aboutPage"][0] {
    ${SEO_FRAGMENT},
    pageTitle,
    pageDescription,
    teamMembers[] ${TEAM_MEMBER_FRAGMENT}
  }
`;

// Generic page by slug
export const PAGE_BY_SLUG_QUERY = (pageType: string, slug: string) => `
  *[_type == "${pageType}" && seo.slug.current == "${slug}"][0] {
    ${SEO_FRAGMENT}
  }
`;

// Configuration page query
export const CONFIGURATION_PAGE_QUERY = `
  *[_type == "configurationPage"][0] {
    ${SEO_FRAGMENT},
    pageTitle,
    pageDescription,
    sections[] {
      id,
      sectionTitle,
      navLabel,
      sectionDescription,
      linksToShow,
      subSections[] {
        id,
        cardType,
        title,
        description,
        includeInNav,
        items[] {
          id,
          title,
          name,
          subtitle,
          bullets[],
          colors[],
          imageUrl {
            asset -> {
              url
            },
            alt
          }
        }
      }
    }
  }
`;

// Product page query
export const PRODUCT_PAGE_QUERY = (slug: string) => `
  *[_type == "productPage" && seo.slug.current == "${slug}"][0] {
    ${SEO_FRAGMENT},
    pageTitle,
    pageDescription[] {
      _type,
      _key,
      children[] {
        _type,
        text,
        marks[]
      },
      markDefs[],
      style
    },
    productName,
    category,
    gallery | order(order asc) [] {
      image {
        asset -> {
          url
        },
        alt
      },
      order
    },
    specs[] {
      lead,
      text
    },
    features[] {
      lead,
      text
    }
  }
`;

// Products by category query
export const PRODUCTS_BY_CATEGORY_QUERY = (category: string) => `
  *[_type == "productPage" && category == "${category}"] | order(productName asc) {
    productName,
    category,
    ${SEO_FRAGMENT},
    gallery | order(order asc) [] {
      image {
        asset -> {
          url
        },
        alt
      }
    },
    specs[] {
      lead,
      text
    }
  }
`;

// All products query
export const ALL_PRODUCTS_QUERY = `
  *[_type == "productPage"] | order(category asc, productName asc) {
    productName,
    category,
    ${SEO_FRAGMENT},
    gallery | order(order asc) [] {
      image {
        asset -> {
          url
        },
        alt
      }
    }
  }
`;

// Contact page query
export const CONTACT_PAGE_QUERY = `
  *[_type == "contactPage"][0] {
    ${SEO_FRAGMENT},
    pageTitle,
    pageDescription
  }
`;

// Category by slug query
export const CATEGORY_BY_SLUG_QUERY = (slug: string) => `
  *[_type == "category" && slug.current == "${slug}"][0] {
    name,
    slug {
      current
    },
    ${SEO_FRAGMENT},
    pageTitle,
    pageDescription,
    image {
      asset -> {
        url
      },
      alt
    }
  }
`;

// Quote page query
export const QUOTE_PAGE_QUERY = `
  *[_type == "quotePage"][0] {
    ${SEO_FRAGMENT},
    pageTitle,
    pageDescription
  }
`;
