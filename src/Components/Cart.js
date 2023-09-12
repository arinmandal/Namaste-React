import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Itemlist } from "./ItemsList"
import { clearCart } from '../ReduxStore/cartSlice'
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items)

  // Performance issue
  // const store = useSelector((store) => store)
  // const cartItems = store.cart.items
  // console.log(cartItems)
  const dispatch = useDispatch();
  const removeAll = () => {
    dispatch(clearCart())
  }
  return (
    <div className='min-h-[calc(100vh-105px)] w-[70%] mx-auto my-4 bg-slate-300 rounded-md'>  
      <div className='mx-4 p-5 flex justify-between'>
      <h1 className='font-bold text-2xl text-white '>Cart</h1>
      <button className='bg-red-400 rounded-md p-2' onClick={removeAll}>Clear All</button>
      </div>
      <div className='cartDetails w-[85%] mx-auto'>
        {cartItems.length === 0 && <h1 className='text-center'>Cart is empty!! Please add some item.</h1> }
      <Itemlist items={cartItems} />
      </div>
      
    </div>
  )
}

export default Cart;