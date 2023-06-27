import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
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
      <div>Products</div>
      {products.map((avo, index) => (
        <h2 key={index}>{avo.name}</h2>
      ))}
    </div>
  )
}

export default HomePage
