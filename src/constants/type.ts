export interface PlatformProps{
    id: number
    slug:string
    name: string,
}

export interface GamesProps {
    id: number;
    name: string;
    background_image: string
    parent_platforms: {platform: PlatformProps}[]
    metacritic: number
  }
  
  export interface FetchGamesProps {
    count: number;
    results: GamesProps[];
  }

  export interface GenreProps {
    id: number,
    name: string
  }

  export interface FetchGenresProps {
    count: number;
    results: GenreProps[];
  }
