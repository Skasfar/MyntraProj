import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Router>
        <section className="h-20 flex items-center justify-center w-full">
            <article className="h-full w-11/12 flex justify-evenly bg-white ">
               
                <div className="h-full w-1/12 ml-6 flex items-center justify-start">
                <Link to={`/home`}>
                    <img
                        src="https://logosarchive.com/wp-content/uploads/2021/12/Myntra-icon-logo.svg"
                        alt=""
                        className="h-9"
                    />
                    </Link>
                </div>
     {/***Main menu********************************************************* */ }
                <div className="h-full w-11/12 flex items-center justify-evenly ">
                    <div className="flex w-50 ">
                        <div className="mr-5 pb-8 pt-8 text-xs font-bold text-gray-800 border-b-4 border-white hover:border-red-500 cursor-pointer">
                            MEN
                        </div>
                        <div className="mr-5 pb-8 pt-8  text-xs font-bold text-gray-800 border-b-4 border-white hover:border-red-400 cursor-pointer">
                            WOMEN
                        </div>
                        <div className="mr-5 pb-8 pt-8  text-xs font-bold text-gray-800 border-b-4 border-white hover:border-yellow-300 cursor-pointer">
                            KIDS
                        </div>
                        <div className="mr-5 pb-8 pt-8  text-xs font-bold text-gray-800 border-b-4 border-white hover:border-orange-600 cursor-pointer">
                            HOME &amp; LIVING
                        </div>
                        <div className="mr-5 pb-8 pt-8  text-xs font-bold text-gray-800 border-b-4 border-white hover:border-green-300 cursor-pointer">
                            BEAUTY
                        </div>
                        <div className="mr-5 pb-8 pt-8  text-xs font-bold text-gray-800 border-b-4 border-white hover:border-red-500 cursor-pointer ">
                            STUDIO <sup className="text-red-500">NEW</sup>
                        </div>
                    </div>
    
    {/* ********Search *************************************************************************** */ }
                    <div id="search" className="w-1/3 h-10 flex items-center border border-gray-300   bg-gray-100 rounded-md ml-10"> 
                   

                    <i class="fa-solid fa-magnifying-glass w-1/12 flex justify-center"></i>
                        <input type="text" placeholder="Search for product" className="w-80 p-2 bg-gray-100 outline-none " />
                    </div>

     {/* User  ******************************************************************* ****** */ }

                    <div className="w-20 flex ">
                        <div className="mr-5 flex items-center cursor-pointer flex-col">
                            <i className="far fa-user mr-1"></i>
                            <span className="text-xs  font-medium border-b-4 border-white hover:border-red-500 cursor-pointer">Profile</span>
                        </div>
                        <div className="mr-5 flex items-center cursor-pointer flex-col">
                            <i className="far fa-heart mr-1"></i>
                            <span className="text-xs font-medium">Wishlist</span>
                        </div>
                        <div className="flex items-center cursor-pointer flex-col">
                            <i className="fas fa-shopping-bag mr-1"></i>
                            <span className="text-xs font-medium">Bag</span>
                        </div>
                    </div>
                </div>
            </article>
        </section>
        <span className="border-2"></span>
        </Router>
    );
};

export default Navbar;
