import { GameCard } from "./GameCard";
import { type Game } from "../types/Game";

interface GameListProps {
    games: Game[];
}

export const GameList = ({ games }: GameListProps) => {
    return (
        <div className="w-full container mx-auto px-4 py-8">
            {games.length === 0 ? (
                <div className="text-white text-center py-12">
                    <p className="text-lg">No games found matching your search.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {games.map((game) => (
                        <GameCard key={game.id} game={game} />
                    ))}
                </div>
            )}
        </div>
    );
};
