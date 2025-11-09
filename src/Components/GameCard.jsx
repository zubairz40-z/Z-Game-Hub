import React from "react";
import { NavLink } from "react-router";


const GameCard =({game})=>{
    if(!game) return null;

    
    
return(
    <div className="rounded-2xl border bg-white overflow-hidden hover:shadow transition">

        <NavLink to={`/games/${game.id}`}>
         <img src={game.coverPhoto} alt={game.title}
         className="w-full h-44 object-cover" />

        </NavLink>

        <div className="p-4">
            
            <NavLink className="font-semibold text-xl">{game.title}</NavLink>

            <p className="text-sm text-gray-600 mt-1">{game.developer}</p>

           <div className="flex items-center justify-between mt-3 text-sm">
          <span className="px-2 py-1 bg-gray-100 rounded-2xl">{game.category}</span>
          <span>⭐ {game.ratings}</span>
        </div>

      
        <NavLink
          to={`/games/${game.id}`}
          className="mt-4 inline-block text-blue-600 underline"
        >
          View details
        </NavLink>
        </div>
    </div>
)

}

export default GameCard;