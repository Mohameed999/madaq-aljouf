import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/data/products'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative h-64 rounded-t-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            loading="eager"
            quality={85}
          />
        </div>
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-bold text-olive line-clamp-1">{product.name}</h3>
          <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
          <div className="flex items-center justify-between pt-2">
            <span className="text-lg font-bold text-terracotta">{product.price} ر.س</span>
            <button 
              type="button"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                // TODO: Add to cart functionality
              }}
              aria-label={`أضف ${product.name} للسلة`}
              className="bg-olive hover:bg-olive/90 text-white px-4 py-2 rounded-lg transition-colors"
            >
              أضف للسلة
            </button>
          </div>
        </div>
      </Link>
    </div>
  )
}
