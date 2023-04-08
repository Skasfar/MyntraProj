import React, { useEffect, useState } from 'react'
const CartPage = () => {

    const [data, setData] = useState(() => {
        const x = localStorage.getItem('cartItems');

        return x ? JSON.parse(x) : [];
    });
        
    useEffect(() => {

    }, [data])
//############################################################## REmove function #######################################################################################//
    function remove(i)
     {
        let newArray = data;
        if (newArray.length == undefined) {
            localStorage.setItem("cartItems", JSON.stringify(data));
            setData([]);
        }
        else {
            setData(() => newArray.splice(i, 1));
            localStorage.setItem("cartItems", JSON.stringify(data));

        }
        setData(() => {
            const x = localStorage.getItem('cartItems');
            return x ? JSON.parse(x) : [];
        })
       
    }

    

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
            {/*************************** Body start********************************************************************/}
            <div className=" relative top-28 w-full flex justify-evenly">
                {/* Cart Items Container Left col *****************************************************************/}
                <div className='bg-[rgb(255,255,255)] w-4/6 h-11/12 flex justify-center ml-14 mr-5 flex-col'>
                    {/* Availablity and Pin */}
                    {data.length != 0 && ( <div>
                    <div class="flex h-20 items-center justify-center border-2 mb-5">
                        <div class="">Check delivery time &amp; services</div>
                        <div class="  rounded border-2 border-primary-100 ml-40 px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal
                    text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-100 hover:bg-neutral-500 hover:bg-opacity-10 focus:border-primary-accent-100 
                    ">
                            ENTER PIN CODE
                        </div>
                    </div>
                    {/* Offers ************************************************************************************/}
                    <div className="h-40 border-2 p-1">
                        Available offers
                    </div>
                    <section className="mt-10 h-40">
                        
                            <div className="flex flex-col  ">
                                {data.map((cartitm, index) => {
                                    let i = 0;
                                    return (
                                        // Card Start!!
                                        <div className="flex justify-between items-center border-2 p-1 ">

                                            <div className="flex  items-center ">
                                                <a href="">
                                                    <img src={cartitm.image} alt=""
                                                        class="h-20 w-20 object-cover flex justify-center "
                                                    />
                                                </a>
                                                <h1>
                                                    {cartitm.title}
                                                </h1>
                                                <h1>
                                                    ₹{Math.ceil(cartitm.price * 70)}
                                                </h1>
                                                {/* Remove btn********* */}
                                            </div >
                                            <button className="h-40 flex items-start" onClick={() => {
                                                remove(index);

                                            }}><i class="fa-solid fa-2x fa-xmark"></i></button>

                                        </div>
                                        // card End!!
                                    )

                                })} </div>
                       
                    </section>
                 </div>
                 )}
                 
                    {data.length === 0 && (
                        <div><h1>
                            Your cart is empty ADD some Items
                        </h1></div>
                    )


                    }
                </div>

                {/************* Right column for total and coupon ********************************************/}
              { data.length!=0 && (<div className="bg-green h-11/12 w-2/6 border-2 bg-blue-400 mr-6">
                     <div className="felx flex-col "><h1 className="font-bold text-xl text-center">Grand Total </h1>
                     <h1 className="text-center text-xl">
                           
                     ₹ { localStorage.getItem("cartTotal")
                        }
                     </h1>
                     </div>   
                </div>)
                }
                {/************* Cart body Ends here ************************************************************/}
            </div>
        </div>
    )
}
export default CartPage