'use client'

import { useState } from 'react'
import ProductCard from '@/components/ProductCard'
import { featuredProducts } from '@/data/products'

export const metadata = {
  title: 'منتجاتنا | مذاق الجوف',
  description: 'تسوق أجود المنتجات الطبيعية والعضوية من مذاق الجوف - زيت زيتون، عسل، وتمور',
}

const categories = [
  { id: 'all', name: 'الكل' },
  { id: 'زيوت', name: 'زيوت' },
  { id: 'عسل', name: 'عسل' },
  { id: 'تمور', name: 'تمور' },
]

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProducts = activeCategory === 'all'
    ? featuredProducts
    : featuredProducts.filter(product => product.category === activeCategory)

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-olive mb-8">منتجاتنا</h1>
        
        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeCategory === category.id
                  ? 'bg-olive text-white'
                  : 'bg-white border border-olive text-olive hover:bg-olive/10'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {filteredProducts.length === 0 && (
            <p className="text-gray-500 col-span-full text-center py-8">
              لا توجد منتجات في هذه الفئة
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
