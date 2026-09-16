import {removeItem,clearCart} from '../store/cartSlice'

import { useDispatch, useSelector } from 'react-redux'

export default function Cart() {

    const dispatch = useDispatch();
    const cartItems = useSelector(state=>state.cart.cartItems)

  return (
    <div>
        <h1>Cart Item</h1>
        <button onClick={()=>dispatch(clearCart())}>Clear Cart</button>
        {!cartItems.length && <p>No cart items found..</p> }
        {
            
        cartItems?.map(item=>(
            <div key={item.id}>
                <p>
                    {item.title}
                </p>
                <p>
                    {item.category}
                </p>
                <button onClick={()=>dispatch(removeItem(item.id))}>Remove item</button>
            </div>
        ))
        }
    </div>
  )
}
