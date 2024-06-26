
import React, {createContext, useEffect, useState} from 'react'
export const CartContext = createContext()

const CartProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [itemsAmount, setItemsAmount] = useState(0)
  const [amount, setAmount] = useState(0)
  const [total, setTotal] = useState(0)
  // cart amount 
  useEffect(() => {
      const amount = cart.reduce((a,c) => {
        return a + c.amount
      }, 0)
      setItemsAmount(amount)

  }, [cart])

  // cart total 
  useEffect(() => {
      const total = cart.reduce((a,c) => {
        return a + c.attributes.price * c.amount
      }, 0)
      setTotal(total)
  }, [cart])

  useEffect(() => {
    const cartItems = localStorage.getItem('cartItems') ?  JSON.parse(localStorage.getItem('cartItems')) : []
    setCart(cartItems)
  },[])
  // add to cart
  const addToCart = (item, id) => {
    const itemID = parseInt(id)
    const newItem = {...item, amount: 1}
    setCart([...cart, newItem])
   
    // check if item is already in the cart
    const cartItem = cart.find(item => {
      return item.id === itemID
    })
    if(cartItem){
      const newCart = cart.map(item => {
        if(item.id === itemID){
          setAmount(cartItem.amount + 1)
          return {...item, amount: cartItem.amount + 1}
        }else{
          return item
        }
      })
      setCart(newCart)
      localStorage.setItem('cartItems', JSON.stringify(newCart))
    }else{
      setCart([...cart, newItem])
      localStorage.setItem('cartItems', JSON.stringify([...cart, newItem]))
    }
  }

  const handleInput = (e, id) => {
    let value = null
    if(typeof e === 'object'){
      value = parseInt(e.target.value)
    }else{
      value = e
    }
    const cartItem = cart.find((item)=> {
      return item.id === id
    })

    if(cartItem) {
      const newCart = cart.map(item =>{
        if( item.id === id ){
            if(isNaN(value)){
              setAmount(1)
              return {...item, amount: 1}
            }else{
              setAmount(value)
              return {...item, amount: value}
            }
        }else{
          return item
        }
      })
      setCart(newCart)
      localStorage.setItem('cartItems', JSON.stringify(newCart))
    }
    // setIsOpen(true)
  }

  // remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item)=>{
      return item.id !== id
    })
    setCart(newCart)
    localStorage.setItem('cartItems', JSON.stringify(newCart))
  }

  

  return <CartContext.Provider value={{isOpen, setIsOpen, addToCart, cart, removeFromCart, itemsAmount, handleInput, total}}>{children}</CartContext.Provider>
}
export default CartProvider