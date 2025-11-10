import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FaStar } from "react-icons/fa";
import GameCard from "../Components/GameCard";


const GameDetailsPage =()=>{
    const {id} = useParams();

    const [games,setGames]= useState([]);
    const [game,setGame]= useState(null);
    const [loading,setLoading]=useState(true);


    useEffect(()=>{
        let isMounted = true;
        setLoading(true);
        fetch("/gamesdata.json")
        .then((r)=>r.json())
          .then((list) => {
        if (!isMounted) return;
        setGames(list || []);
        const found = (list || []).find((g) => String(g.id) === String(id)) || null;
        setGame(found);
      })
      .catch(() => {
        if (!isMounted) return;
        setGames([]);
        setGame(null);
      })
      .finally(() => isMounted && setLoading(false));
    return () => {
      isMounted = false;
    };
  }, [id]);

  const popular = React.useMemo(() => {
    return [...games]
      
  }, [games]);

  if (loading) return <div className="p-6">Loading game…</div>;
  if (!game) return <div className="p-6">Game not found.</div>

  return (
    <div className="bg-blue-100">
        <div className="max-w-6xl mx-auto p-6 ">
           

            <div className="flex flex-col md:flex-row gap-6">
                 <img src={game.coverPhoto} alt={game.title} 
            className="w-full md:w-80 rounded-xl object-cover"/>

            <div className="items-center">
                <p className="text-3xl font-bold">{game.title}</p>
                <p className="text-m text-gray-600 mt-1">{game.developer}</p>

           <div className="flex items-center justify-between mt-3 text-lg">
          <span className="px-2 py-1 bg-gray-100 rounded-2xl">{game.category}</span>
          <span>⭐ {game.ratings}</span>
        </div>
                <p className="mt-4 text-lg">{game.description}</p>
                 <a
            href={game.downloadLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary mt-6 px-10"
          >
            Install 
          </a>
        </div>
      </div>
 </div>
      <section className="max-w-6xl mx-auto md:flex-row py-10 px-10 ">
        <h2 className="text-2xl font-bold mb-4">Popular Games</h2>
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
          
    </div>
  )
        
    
}

export default GameDetailsPage;