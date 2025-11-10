import React from "react";
import plugin from './../../node_modules/daisyui/index';
import { NavLink } from "react-router";


const BannerSlider =()=>{
    return(
        <div className="hero bg-[#3b3e3d] text-[#EAF2EF]">

       
        <div className="flex flex-col lg:flex-row items-center gap-8">

  <div className="hero-content flex flex-wrap gap-4">
    <img
      src="/image.png"
      className="max-w-[450px] md:max-w-m rounded-lg shadow-2xl"
    />
     <img
      src="/image2.jpg"
      className="max-w-[450px]  md:max-w-m rounded-lg shadow-2xl"
    />
     <img
      src="/image3.jpg"
      className="max-w-[450px] md:max-w-m rounded-lg shadow-2xl"
    />
     
    <div>
      <h1 className="text-3xl font-bold">Game Hub</h1>
      <p className="py-6">
       Your all-in-one game library—discover, collect, and play.
      </p>
      < NavLink to="/register" className="btn btn-primary">Register</NavLink>
    </div>
    </div>
       </div>
  </div>

       

    )
}

export default BannerSlider;