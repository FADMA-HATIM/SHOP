import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { FiTruck } from 'react-icons/fi';
import { BsCurrencyDollar } from 'react-icons/bs';
import { BiHeadphone} from 'react-icons/bi';
import {CiPercent} from 'react-icons/ci';
import { AiOutlineShoppingCart} from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart,AiOutlineCloseCircle } from 'react-icons/ai';
import Homeproduct  from './homeproduct';
import './Home.css';
const Home = ({ detail, view, close, setClose, addtocart}) => {
    return(
       
        <>
        {
            close?
        
              <div className='product_detail'>
              <div className='container'>
                   <button onClick={ () => setClose(false)} className='closebtn'><AiOutlineCloseCircle/></button>
                   {
                       detail.map((curElm) =>
                       {
                            return(
                                <div className='productbox'>
                             
                                   <div className='img-box'>
                                     <img src={curElm.Img} alt={curElm.title}></img>
                                    </div>
                                    <div className='detail'>
                                        <h4> {curElm.Cat} </h4>
                                        <h2> {curElm.title} </h2>
                                        <p> The best product Jewelery in 2023</p>
                                        <h3> ${curElm.Price} </h3>
                                        <button>Add To Cart</button>
                                    </div>
                                </div>    
                           )                 
                        } )
                    }
              </div>   
                <div className='productbox'></div>
            
        </div> :null
        } 
    
        
        <div className='top_banner'>
            <div className='container'>
                <div className='detail'>
                 <h2>The Best Jewelery Collection 2023</h2>
                   <Link to='/product' className='link'>Shop Now<BsArrowRight/></Link>
               </div>
               <div className='img_box'>
                 <img src='./img/ee.png'></img>
               </div>
            </div> 
        </div>
            <div className='product_type'>
                <div className='container'>
                    <div className='box'>
                        <div className='img_box'>
                          <img src='./img/60.png'></img>
                        </div>
                       <div className='detail'>
                         <p>30products</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='img_box'>
                         <img src=' ./img/22.png'></img>
                        </div>
                       <div className='detail'>
                         <p>56products</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='img_box'>
                          <img src='./img/lll.jpg'></img>
                        </div>
                       <div className='detail'>
                         <p>23products</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='img_box'>
                          <img src='./img/KL.png'></img>
                        </div>
                       <div className='detail'>
                         <p>20products</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about'>
                <div className='container'>
                    <div className='box'>
                        <div className='icon'>
                            <FiTruck/>
                        </div>
                        <div className='detail'>
                            <h3>Free shopping</h3>
                            <p>Oder above $1000</p>
                        </div>
                    </div>
                   
                    <div className='box'>
                        <div className='icon'>
                            <BsCurrencyDollar/>
                        </div>
                        <div className='detail'>
                            <h3>Return & Refund</h3>
                            <p>Money Back Gaurenty</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <BiHeadphone/>
                        </div>
                        <div className='detail'>
                            <h3>Customer Support</h3>
                            <p>Every Time Call Support</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <CiPercent/>
                        </div>
                        <div className='detail'>
                            <h3>Member Discount </h3>
                            <p>On every Oder</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='product'>
                <h2>Top Products</h2>
                <div className='container'>
                    {
                       Homeproduct.map((curElm) =>
                       {
                         return(
                             <div className='box'key={curElm.id}>
                                   <div className='img_box'>
                                     <img src= {curElm.Img} ></img>
                                       <div className='icon'>
                                         <li onClick={() => addtocart(curElm)}> < AiOutlineShoppingCart/></li>
                                         <li onClick={()=> view(curElm)}> <BsEye/></li>
                                         <li>< AiOutlineHeart /></li>  
                                       </div>
                                    </div>
                                    <div className='detail'>
                                       <p> {curElm.cat} </p>
                                       <h3> {curElm.title} </h3>
                                       <h4> ${curElm.Price} </h4>
                                   </div>    
                               </div>        
                            )   
                        }) 
                    }
                
                </div>
            </div>
            <div className='banner'>
                <div className='container'>
                    <div className='detail'>
                       <h4>LATEST TECHNOLOGY ADDED</h4>
                       <h3>Jewelery bracelet 10.2 2022</h3>
                        <p>$986</p>
                        <Link to='/product'className='link'>Shop Now<BsArrowRight/></Link>
                   </div>
                    <div className='img_box'>
                        <img src='./img/GG.jpg'></img>
                    </div>
                </div>
               

            </div>
        
    </>

    )

}

export default Home