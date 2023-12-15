import React from "react";
import { AiOutlineClose} from "react-icons/ai";
import { Link } from "react-router-dom";
import Product from "./product";
import './cart.css';

const Cart = ({cart,setCart}) =>{
    const inqty =(Product) =>
    {
        const exsit = cart.find((x) =>
        {
            return x.id === Product .id
        } )
        setCart(cart.map((curElm) =>
        {
            return curElm.id === Product .id ? {...exsit, qty: exsit.qty +1} : curElm
        }
        ))
      
    }
    const decqty =(Product) =>
    {
        const exsit = cart.find((x) =>
        {
            return x.id === Product .id
        } )
        setCart(cart.map((curElm) =>
        {
            return curElm.id === Product .id ? {...exsit, qty: exsit.qty -1} : curElm
        }
        ))
      
    }
    const removeproduct = (Product) =>
    {
        const exsit = cart.find((x) =>
        {
            return x.id === Product .id
        } )
        if(exsit.qty > 0)
        {
            setCart(cart.filter((x) =>
            {
                return x.id !== Product.id
            }))
        }
    }
    const Totalprice = cart.reduce((price, item) => price + item.qty * item.Price, 0)
    return (
        <> 
        <div className="cartcontainer">
            {cart.length === 0 &&
            <div className="emptycart">
            <h2 className="empty">Cart is Empty</h2>
            <Link to ='/product' className="emptycartbtn">Shop Now</Link>
            </div>
            }
            <div className="contant">
                {
                    cart.map((curElm) =>
                    {
                        return(
                            <div className='cart_item'key={curElm.id}>
                                <div className='img_box'>
                                 <img src= {curElm.Img} ></img>
                                </div>
                                
                                <div className='detail'>
                                    <div className="info">
                                 <h4> {curElm.Cat} </h4>
                                 <h3> {curElm.title} </h3>
                                 <p> Price:${curElm.Price} </p>
                                 <div className="qty">
                                     <button className="inqty" onClick={() => inqty(curElm)}>+</button>
                                     <input type="text" value={curElm.qty}></input>
                                     <button className="decqty" onClick={() => decqty(curElm)}>-</button>
                                 </div>
                                 <h4 className="subtotal"> sub total: ${curElm.Price*curElm.qty} </h4>
                                 </div>
                                 <div className="close">
                                 <button onClick={() =>removeproduct(curElm)}><AiOutlineClose/></button>
                                 </div>
                                </div>
                                            
                            </div>
                                    
                        )
                    })
                    
                }   
            </div>
            {
                cart.length > 0 &&
                <>
                 <h2 className="totalprice">total:$ {Totalprice }</h2>
                 <button className="checkout">checkout</button>
                </>
            }
        </div>
     </>
    )
}

export default Cart