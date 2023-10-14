import { gameQuery } from "@/app/page";

interface Props {
  gameQuery: gameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return <h1>{heading}</h1>;
};

export default GameHeading;
