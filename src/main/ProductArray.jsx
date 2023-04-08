import React from 'react'
import { Link } from 'react-router-dom';

const ProductArray = (r) => {
  console.log(r.data);
  return (
    <div className="flex w-full h-60 z-0 bg-gradient-to-r from-blue-400 to-blue-500 justify-center align-middle sm:flex-wrap md:flex-nowrap mt-3 mb-3  flex-row gap-6 border-x">
      {r.data.map((x) => {
        return (
          <Link to={`/product/${x.id}`} class="block mt-4 mb-2 hover:cursor-pointer">
            <img
              alt={x.title}
              src={x.image}
              class="h-4/6 w-120px object-cover flex justify-center "
            />

           <div className="bg-green-500 box-border w-120px h-1/6 text-xs text-center">{x.title.slice(0, 14)}.. 
           <p class="mt-1 max-w-sm text-gray-700">
            {Math.floor(Math.random() * 50)+10 } % Off
            </p>
           </div>
          </Link>
        )
      })}

    </div>
  )
}
export default ProductArray