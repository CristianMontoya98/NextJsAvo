import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
const HomePage = () => {
  const [products, setProducts] = useState<TProduct[]>([])
  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data, quantity }) => {
        setProducts(data)
      })
  }, [])
  /*  */
  return (
    <div>
      <div>Products</div>
      {products.map((avo, index) => (
        <h2 key={index}>{avo.name}</h2>
      ))}
    </div>
  )
}

export default HomePage
