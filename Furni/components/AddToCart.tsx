'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { addToCart } from '@/app/actions/actions'
import toast from 'react-hot-toast'
import { Product } from '@/types/product'
import { ShoppingCart } from 'lucide-react'

interface AddToCartButtonProps {
  product: Product
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = async () => {
    setIsAdding(true)
    await addToCart(product)
    setIsAdding(false)
    toast.success(`${product.name} added to cart!`)
  }

  return (
    <Button
      onClick={handleAddToCart}
      disabled={isAdding}
      className="w-full bg-[#8B4513]  text-white hover:bg-[#5B4513] text-xl py-6 flex items-center justify-center gap-3"
    >
      <ShoppingCart className="w-6 h-6" />
      {isAdding ? 'Adding to Cart...' : 'Add to Cart'}
    </Button>
  )
}

