import React, { useMemo } from "react";
import BannerSlider from "../Components/BannerSlider";

import { useLoaderData } from "react-router";
import GameCard from "../Components/GameCard";
import NewsletterForm from './../Components/NewsletterForm';

const HomePage=()=>{

    const games = useLoaderData() || [];
   const popular = useMemo(() => {
    return [...games]
      .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings))
      .slice(0, 3);
  }, [games]);
    return(
        <div className="bg-[#3b3e3d] ">
            <BannerSlider className="max-w-6xl"></BannerSlider>

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

            <NewsletterForm></NewsletterForm>
        </div>
    )
}

export default  HomePage;