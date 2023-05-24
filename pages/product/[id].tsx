import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  // state
  const [product, setProduct] = useState<TProduct>()
  // router
  const {
    query: { id },
  } = useRouter()

  useEffect(() => {
      window.fetch(`/api/avo/${id}`)
        .then((res) => res.json())
        .then(({ data }) => setProduct(data))
  }, [id])

  return (
    <section>
      <h1>Página producto:</h1>
      <h2>{product?.name}</h2>
      <h2>{id}</h2>
    </section>
  )
}

export default ProductPage