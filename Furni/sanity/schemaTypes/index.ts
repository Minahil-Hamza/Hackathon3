import { type SchemaTypeDefinition } from 'sanity'
import banner from './banner'
import order from './order'
import { product } from './products'
import { Category } from './category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, banner, order, Category],
}
