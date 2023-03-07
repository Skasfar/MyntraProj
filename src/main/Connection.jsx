import React from 'react'
import axios from "axios";
export default function Connection() {
    const options = {
        method: 'GET',
        url: 'https://fakestoreapi.com/products/category/men%27s%20clothing'
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
  return (
    <div>Connection</div>
  )
}
