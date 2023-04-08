import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import { UserIncFun } from './userContext';
import Navbar from './Navbar';

const ProductPage = (p) => {
    let { index } = useParams();
    let [d, setD] = useState(null);
useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${index}`)
            .then((response) => {
                setD(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [index])


    return (
        <UserIncFun.Consumer>{(fun)=>{
            return (

           <>
           <Navbar />
        <div className="flex mt-2 align-top justify-center  w-full h-2/5 p-2 flex-col sm:flex-row relative  top-28">
            {d && (
                <section className="  w-2/3 h-2/5 hover:cursor-zoom-in ">
                    <img src={d.image} alt="" className="h-screen w-5/6" />
                </section>
            )}
            {d && (
                <section className="flex flex-col  w-1/2 h-full text-center ">
                    <h2 className="flex justify-start uppercase">
                        Catagory: {d.category}
                    </h2>
                    <h1 className="text-xl text-left">  {d.title} </h1>
                    <h2 className=" border box-border text-left w-40 hover:border-gray-900 hover:cursor-pointer"> {d.rating.rate} 
                        <i className="fa-sharp fa-solid fa-star text-orange-500"></i> <span className="text-slate-400 text-xl">|</span> {d.rating.count}k Ratings </h2>
                    
                    <span className="border-b-2 mb-3 mt-3"></span>
                    <h2 className="text-left text-3xl">₹{Math.ceil(d.price*70)} <span className="text-xl">MRP  <span className="line-through text-slate-800"> ₹{ Math.ceil((d.price*70)*1.2)}</span></span> <b className="text-red-600 text-xl ">(20% Off)</b> </h2>
                    <span className="text-left text-lime-600 font-bold mt-5 mb-5">inclusive of all taxes</span>
                    <div className="text-left mt-5">
                        <span className="text-sm font-bold"> SELECT SIZE  </span> <span className="text-red-600 text-sm ml-8">SIZE CHART <span className="text-xl">&gt;</span> </span>
                        <div className="flex mt-5 " >
                            <div className=" flex justify-center align-middle h-12 w-12 rounded-full border border-slate-500 pt-2.5 mr-4 hover:cursor-pointer">S</div> 
                            <div className=" flex justify-center align-middle h-12 w-12 rounded-full border border-slate-500 pt-2.5 mr-4 hover:cursor-pointer">M</div> 
                            <div className=" flex justify-center align-middle h-12 w-12 rounded-full border border-slate-500 pt-2.5 mr-4 hover:cursor-pointer">L</div> 
                            <div className=" flex justify-center align-middle h-12 w-12 rounded-full border border-slate-500 pt-2.5 mr-4 hover:cursor-pointer">XL</div> 
                        </div>
                    </div>
                    
                    <div className="flex mt-9 mb-9 ">
                    
                    <button  class="ml-0 mr-4 bg-red-500 hover:bg-red-400 text-white font-bold py-3 px-9 rounded "  onClick={()=>fun(d)}>
                    
                    <i class="fa-solid fa-cart-shopping"></i> ADD TO BAG </button>
                    
                    <button class="  hover:bg-slate-50 text-gray-600  py-2 px-4 border border-gray-600 rounded">
                    <i class="fa-sharp fa-solid fa-heart"></i> WISHLIST
                    </button>
                    </div>
                <span className="border-b-2 mb-5 mt-5 ml-2"></span>
                </section>
            )}
        </div>
        </>
         )
        }}
        </UserIncFun.Consumer>
    )
}

export default ProductPage
