import {postType} from './postType/postType'
import {priceListType} from './priceListType/priceListType'
import {seo} from './seo'
import {processStep} from './processStep'
import {faqItem} from './faqItem'
import {teamMember} from './teamMember'
import {designOption, designSubsection, designSection} from './designSection'
import {spec, productFeature, galleryImage} from './product'
import {ourProcessPage} from './pages/ourProcessPage'
import {faqPage} from './pages/faqPage'
import {aboutPage} from './pages/aboutPage'
import {configurationPage} from './pages/configurationPage'
import {productPage} from './pages/productPage'
import {contactPage} from './pages/contactPage'
import {quotePage} from './pages/quotePage'

export const schemaTypes = [
  postType,
  priceListType,
  // Reusable object types
  seo,
  processStep,
  faqItem,
  teamMember,
  designOption,
  designSubsection,
  designSection,
  spec,
  productFeature,
  galleryImage,
  // Page document types
  ourProcessPage,
  faqPage,
  aboutPage,
  configurationPage,
  productPage,
  contactPage,
  quotePage,
]
