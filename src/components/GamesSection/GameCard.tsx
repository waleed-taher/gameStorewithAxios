import { GamesProps } from "@/constants/type";
import OptimizeImage from "@/provider/OptimizeImages";
import Image from "next/image";
import PlatformsIcon from "./PlatformsIcon";
import CriticScore from "./CriticScore";

interface GameCardProps {
  game: GamesProps;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
      <div className="bg-cover">
        <img
          src={OptimizeImage(game.background_image)}
          alt={game.name}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{game.name}</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="flex items-center -space-x-14 pt-2 pb-4">
        <div className="px-6 flex w-full">
          <PlatformsIcon
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
        </div>
        <CriticScore score={game.metacritic} />
      </div>
    </div>
  );
};

export default GameCard;
