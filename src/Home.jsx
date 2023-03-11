import React from 'react'
import Connection from "./main/Connection";
import Slider from "./main/Slider";
import NavBar from "./main/Navbar"
import { useEffect, useState } from "react";
import ProductArray from "./main/ProductArray";
import axios from 'axios';
import Banner from './main/Banner';


const Home = () => {
    let [products, setProducts] = useState([]);
    let [products1, setProducts1] = useState([]);
    useEffect(() => {
        //****mens clothing****
        const options = {
            method: 'GET',
            url: 'https://fakestoreapi.com/products/category/men%27s%20clothing'
        };
        axios.request(options).then(function (response) {
            setProducts(response.data)
            // console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
        //******womens clothing****
        const options1 = {
            method: 'GET',
            url: `https://fakestoreapi.com/products/category/women%27s%20clothing`
        }
        axios.request(options1).then(function (response) {
            setProducts1(response.data)
            // console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });

    }, [])


    return (
        <div>
            <Slider />
            <Banner data="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/3/2/9063526d-1fcc-4002-a890-36dae5b4473f1677742079670-03_OMG--Deals.jpg" />
            
            <ProductArray data={products1}/>
            <Banner data="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/3/5/5725220e-ef3c-40c3-a60d-1e5361a3aa5e1678037704201-Desktop-Banner_Unisex1.png"/>
            {/* <Connection/> */}

        </div>
    )
}

export default Home