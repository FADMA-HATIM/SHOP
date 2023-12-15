import React, {useState} from 'react';
import Rout from './Compenent/rout'; 
import { BrowserRouter } from 'react-router-dom';
import Nav from './Compenent/nav'; 
import Footer from './Compenent/footer';
import Productdetail from './Compenent/productdetail';


const App = () => { 
  const [cart,setCart]  = useState([])
  const [close, setClose] = useState(true )
  const [detail, setDetail] = useState([])
  const [ product, setProduct] = useState(Productdetail)
  const searchbtn = (product) =>
  {
    const change =Productdetail.filter((x) =>
    {
      return x.Cat === product ;
    })
    setProduct(change)
  }
  const view =(product) =>
  {
    setDetail([{...product}])
    setClose(true)
  }
  
  const addtocart =(product) =>
  {
    const exsit =cart.find((x) =>
   {
       return x.id === product.id
   }) 
   if (exsit)
   {
    alert("This Product is already added to cart")
   }
   else
   {
     setCart([...cart,{...product, qty:1}])
      alert("product is added to cart")
   }
    
  }
  return (
    <BrowserRouter>
      <Nav searchbtn={searchbtn} />
      <Rout product= {product}  setProduct= {setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart}  />
      <Footer/>
    </BrowserRouter>
  );
};

export default App;