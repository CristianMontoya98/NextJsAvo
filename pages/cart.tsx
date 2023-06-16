import React from 'react'
import { Divider } from 'semantic-ui-react'
import Layout from '@components/Layout/Layout'
import CartItemList from '@components/CartItemList/CartItemList'
import CartSummary from '@components/CartSummary/CartSummary'
import { useCart, useCartMutations } from '@store/Cart'

const CartPage = () => {
  const { items, count } = useCart()
  const { removeFromCart } = useCartMutations()

  return (
    <>
      <CartItemList />
      <Divider />
      <CartSummary />
    </>
  )
}

export default CartPage
