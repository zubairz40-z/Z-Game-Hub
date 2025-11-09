import React from "react";
import { Link } from "react-router";

const GameCard = ({ game }) => {
  if (!game) return null;

  return (
    <div className="rounded-2xl border bg-white overflow-hidden hover:shadow transition">
      <Link to={`/games/${game.id}`}>
        <img
          src={game.coverPhoto}
          alt={game.title}
          className="w-full h-44 object-cover"
        />
      </Link>

      <div className="p-4">
        <h3 className="font-semibold leading-tight">
          <Link to={`/games/${game.id}`}>{game.title}</Link>
        </h3>

        <p className="text-sm text-gray-600 mt-1">{game.developer}</p>

        <div className="flex items-center justify-between mt-3 text-sm">
          <span className="px-2 py-1 bg-gray-100 rounded-2xl">{game.category}</span>
          <span>⭐ {game.ratings}</span>
        </div>

        <Link
          to={`/games/${game.id}`}
          className="mt-4 inline-block text-blue-600 underline"
        >
          View details
        </Link>
      </div>
    </div>
  );
};

export default GameCard;
