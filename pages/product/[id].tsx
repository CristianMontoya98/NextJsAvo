import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import Layout from '@components/Layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'

const ProductPage = () => {
  const { query } = useRouter()
  const [product, setProduct] = useState<TProduct | null>(null)

  useEffect(() => {
    if (query.id) {
      window
        .fetch(`/api/avo/${query.id}`)
        .then((response) => response.json())
        .then((data) => {
          setProduct(data.data)
        })
    }
  }, [query.id])

  return <>{product == null ? null : <ProductSummary product={product} />}</>
}

export default ProductPage
