import React, { useEffect, useMemo } from "react";
import BannerSlider from "../Components/BannerSlider";
import { motion } from "framer-motion";
import { useLoaderData } from "react-router";
import GameCard from "../Components/GameCard";
import NewsletterForm from './../Components/NewsletterForm';
import useTitle from "../hooks/useTitle";

const HomePage=()=>{

    const games = useLoaderData() || [];

     useEffect(() => {
    document.title = "GameHub | Home";
  }, []);

   useTitle("GameHub | Home");
   const popular = useMemo(() => {
    return [...games]
      .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings))
      .slice(0, 3);
  }, [games]);
    return(

        <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="bg-[#3b3e3d]  mx-auto px-4 py-8"
    >
        
        <div className="bg-[#3b3e3d] overflow-hidden ">
            <BannerSlider className="max-w-6xl"></BannerSlider>
          </div>
             <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-4 text-[#EAF2EF]">Popular Games</h2>
        {popular.length === 0 ? (
          <p>No games found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popular.map((g) => (
              <GameCard key={g.id} game={g} />
            ))}
          </div>
        )}
      </section>
       <div className="max-w-6xl mx-auto">
            <NewsletterForm  ></NewsletterForm>
            </div>
        </motion.div>
    )
}

export default  HomePage;