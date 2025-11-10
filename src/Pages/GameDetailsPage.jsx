// src/Pages/GameDetailsPage.jsx
import React from "react";
import { useParams } from "react-router";
import GameCard from "../Components/GameCard";

const GameDetailsPage = () => {
  const { id } = useParams();

  const [games, setGames] = React.useState([]);
  const [game, setGame] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  // Load all games once
  React.useEffect(() => {
    let isMounted = true;
    setLoading(true);
    fetch("/gamesdata.json")
      .then((r) => r.json())
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

  // Top 6 by rating
  const popular = React.useMemo(() => {
    return [...games]
      .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings))
      .slice(0, 6);
  }, [games]);

  if (loading) return <div className="p-6">Loading game…</div>;
  if (!game) return <div className="p-6">Game not found.</div>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={game.coverPhoto}
          alt={game.title}
          className="w-full md:w-80 rounded-xl object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold">{game.title}</h1>
          <p className="mt-2 text-sm opacity-80">
            {game.developer} • {game.category} • ⭐ {game.ratings}
          </p>
          <p className="mt-4">{game.description}</p>
          <a
            href={game.downloadLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary mt-6"
          >
            Install / Visit
          </a>
        </div>
      </div>

      <section className="px-1 py-10">
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
  );
};

export default GameDetailsPage;
