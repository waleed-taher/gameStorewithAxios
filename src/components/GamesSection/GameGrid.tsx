"use client";
import UseGame from "@/hooks/useGame";
import GameCard from "./GameCard";
import Skeleton from "../Skeleton";
import { gameQuery } from "@/app/page";

interface Props {
  gameQuery: gameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = UseGame(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {error && <p>{error}</p>}

      <div className="flex flex-wrap mx-6 gap-6 py-10">
        {isLoading && skeleton.map((skeleton) => <Skeleton key={skeleton} />)}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  );
};

export default GameGrid;
