"use client";
import GameGrid from "@/components/GamesSection/GameGrid";
import GameHeading from "@/components/GamesSection/GameHeading";
import GenreList from "@/components/GenresSection/GenreList";
import Navbar from "@/components/layout/Navbar";
import { PlatformList } from "@/components/platformSection/PlatformList";
import SortSelector from "@/components/platformSection/SortSelector";
import { GenreProps, PlatformProps } from "@/constants/type";
import { useState } from "react";

export interface gameQuery {
  genre: GenreProps | null;
  platform: PlatformProps | null;
  order: string;
  searchText: string;
}

export default function Home() {
  const [gameQuery, setGameQuery] = useState<gameQuery>({} as gameQuery);
  return (
    <>
      <Navbar
        onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
      />
      <div className="flex">
        <div className="w-1/4 max-lg:hidden ">
          <GenreList
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            genreSelected={gameQuery.genre}
          />
        </div>
        <div className="w-3/4 overflow-y-auto">
          <GameHeading gameQuery={gameQuery} />
          <div className="flex">
            <PlatformList
              onSelectedPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
              platformSelected={gameQuery.platform}
            />
            <SortSelector
              onSelectSortOrder={(order) =>
                setGameQuery({ ...gameQuery, order })
              }
              selectedOrder={gameQuery.order}
            />
          </div>
          <GameGrid gameQuery={gameQuery} />
        </div>
      </div>
    </>
  );
}
