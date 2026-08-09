import { client } from "./client";
import {
  OUR_PROCESS_PAGE_QUERY,
  FAQ_PAGE_QUERY,
  ABOUT_PAGE_QUERY,
  CONFIGURATION_PAGE_QUERY,
  CONTACT_PAGE_QUERY,
  QUOTE_PAGE_QUERY,
  PRODUCT_PAGE_QUERY,
} from "./queries";

/**
 * Fetch complete Our Process page data
 */
export async function getOurProcessPageData() {
  try {
    const data = await client.fetch(OUR_PROCESS_PAGE_QUERY);
    return data;
  } catch (error) {
    console.error("Error fetching Our Process page:", error);
    return null;
  }
}

/**
 * Fetch complete FAQ page data
 */
export async function getFaqPageData() {
  try {
    const data = await client.fetch(FAQ_PAGE_QUERY);
    return data;
  } catch (error) {
    console.error("Error fetching FAQ page:", error);
    return null;
  }
}

/**
 * Fetch complete About page data
 */
export async function getAboutPageData() {
  try {
    const data = await client.fetch(ABOUT_PAGE_QUERY);
    return data;
  } catch (error) {
    console.error("Error fetching About page:", error);
    return null;
  }
}

/**
 * Generic fetch by page type
 */
export async function getPageData(pageType: string, query: string) {
  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error(`Error fetching ${pageType}:`, error);
    return null;
  }
}

/**
 * Fetch complete Configuration page data
 */
export async function getConfigurationPageData() {
  try {
    const data = await client.fetch(CONFIGURATION_PAGE_QUERY);
    return data;
  } catch (error) {
    console.error("Error fetching Configuration page:", error);
    return null;
  }
}

/**
 * Fetch complete Contact page data
 */
export async function getContactPageData() {
  try {
    const data = await client.fetch(CONTACT_PAGE_QUERY);
    return data;
  } catch (error) {
    console.error("Error fetching Contact page:", error);
    return null;
  }
}

/**
 * Fetch complete Quote page data
 */
export async function getQuotePageData() {
  try {
    const data = await client.fetch(QUOTE_PAGE_QUERY);
    return data;
  } catch (error) {
    console.error("Error fetching Quote page:", error);
    return null;
  }
}

/**
 * Fetch product page data by slug
 */
export async function getProductPageData(slug: string) {
  try {
    const query = PRODUCT_PAGE_QUERY(slug);
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error(`Error fetching product page for ${slug}:`, error);
    return null;
  }
}
