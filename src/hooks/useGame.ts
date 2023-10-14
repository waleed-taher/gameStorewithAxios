'use client'
import { GamesProps, GenreProps, PlatformProps } from "@/constants/type";

import UseData from "./useData";
import { gameQuery } from "@/app/page";

const UseGame = (gameQuery: gameQuery) => {
    return UseData<GamesProps>('/games', 
    { params: 
        {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.order,
            search: gameQuery.searchText
        }
    }, 
    [gameQuery]
    )
}

export default UseGame