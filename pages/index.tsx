import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import ProductList from '@components/ProductList/ProductList'
const HomePage = () => {
  const [products, setProducts] = useState<TProduct[]>([])
  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data }: TAPIAvoResponse) => {
        setProducts(data)
      })
  }, [])
  /*  */
  return (
    <div>
      <Header />
      <ProductList products={products} />
    </div>
  )
}

export default HomePage
