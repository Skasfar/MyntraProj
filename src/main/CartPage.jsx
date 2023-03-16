import React, { useState } from 'react'

const CartPage = () => {

    let x=localStorage.getItem("cartItems");
    x=JSON.parse(x);
let [data,setData]=useState(x);;
console.log(data);

    return (
        <div>
        <section className="h-20 flex items-center justify-center w-full fixed z-10 top-0 bg-white">
            <article className="h-full w-11/12  bg-white flex justify-evenly ">
                <div className="h-full w-full ml-6 flex items-center   ">
                    <div className="flex w-1/6 h-full justify-start items-center " >
                        <img
                            src="https://logosarchive.com/wp-content/uploads/2021/12/Myntra-icon-logo.svg"
                            alt=""
                            className="h-9"
                        />
                    </div>
                    <div className='h-full w-3/6 flex justify-center items-center '>
                    <ol className="flex w-full text-xs text-[rgb(32,199,202)] font-bold"> 
                    <li class="ml-2 active:border-b-2">BAG</li>
                      <li className="ml-2 mr-2 border-dashed border-b-2  border-teal-600 pt-2  h-0.5 w-10 inline-block"></li>
                      <li class="text-[rgb(105,107,121)]">ADDRESS</li>
                      <li className="ml-2 mr-2 border-dashed border-b-2  border-teal-600 pt-2  h-0.5 w-10 inline-block"></li>
                      <li class="ml-2 text-[rgb(105,107,121)]">PAYMENT</li>
                       </ol>
                    </div>

                    <div className='w-2/6 flex justify-end'>
                    <i class="fa-solid fa-shield-halved text-green-400 fa-2x"></i><span className=" flex items-center text-[rgb(83,87,102)] uppercase text-xs font-bold font-sans">100%  secure</span>
                    </div>
                </div>
            </article>
        </section>
    {/*************************** Body *****************************/}
    <div className="bg-yellow-300 relative top-28 bg-[rgb(111,228,255)]">
           <div>
            hellow
     
        </div>

        </div>
        </div>
    )
}
export default CartPage