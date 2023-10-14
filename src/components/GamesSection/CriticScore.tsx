import { cn } from "@/lib/utlis";

interface CriticScoreProps {
  score: number;
}
const CriticScore = ({ score }: CriticScoreProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10",
        {
          " bg-green-50  text-green-700  ring-green-600/20": score > 75,
        },
        {
          " bg-yellow-50  text-yellow-800  ring-yellow-600/20":
            score > 50 && score < 75,
        }
      )}
    >
      {score}
    </span>
  );
};

export default CriticScore;
