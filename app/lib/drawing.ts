export type Product = 'tee' | 'hoodie' | 'tote' | 'cap'
export const COLORS = [
  { key: 'white', name: 'Blanco', hex: '#ffffff' },
  { key: 'black', name: 'Negro', hex: '#111111' }
]
export function productLabel(p: Product) {
  return { tee: 'Polo', hoodie: 'Hoodie', tote: 'Tote bag', cap: 'Gorra' }[p]
}
