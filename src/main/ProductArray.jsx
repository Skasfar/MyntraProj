import React, { useEffect } from 'react'

const ProductArray = (r) => {
    useEffect(()=>{
        console.log(r.data);
    },[])
    
  return(
    <div className="flex w-full justify-center from-gray-100 h-20 flex-row gap-6 ">
        {r.data.map((x)=>{
        return(<div className="flex flex-col "> 
            <img className="w-12 h-14" src={x.image} alt="" />
            <p className="text-xs">{x.title}</p>
            <h6>{x.price}</h6>
        </div>
        )
    })}</div>
  )
}
export default ProductArray