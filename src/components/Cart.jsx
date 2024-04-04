import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "../utils/cartSlice"

const Cart = () => {

    // const cartItems = useSelector((store)=>(store.cart.items))
    const cartItems = useSelector((store)=>(store.cart.items));
    console.log(cartItems);

    const dispatch = useDispatch();

    const clearcart = ()=>{
        dispatch(emptyCart());
    }

  return (
    

    
    <div>
        <h1>cart....</h1>

        <button
        onClick={clearcart}

        >clear cart</button>

    </div>
  )
}

export  default Cart;