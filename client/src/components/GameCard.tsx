import { type Game } from "../types/index";
import { InformationCircleIcon, HeartIcon, PlusIcon } from "@heroicons/react/24/outline";

interface GameCardProps {
    game: Game;
}

export const GameCard = ({ game }: GameCardProps) => {
    return (
        <div className="bg-card overflow-hidden transition-all duration-300 cursor-pointer border-3 border-card-border">
            <div className="relative">
                <img src={game.image} alt={game.title} className="w-full h-[320px] object-cover" />

                {game.hasCashback && (
                    <div className="absolute bottom-10 bg-info text-sm font-bold px-2 py-1.5 flex items-center gap-1 uppercase">
                        <PlusIcon className="size-4 translate-y-[-0.5px]" />
                        <span>Cashback</span>
                    </div>
                )}

                {game.platformIcon && (
                    <div className="absolute bottom-0 bg-black/50 backdrop-blur-md px-3 py-1 flex items-center justify-center w-full">
                        <span className="text-white text-xs font-bold">{game.platformIcon}</span>
                    </div>
                )}
            </div>

            <div className="p-4">
                <div>
                    <h3 className="text-white font-bold text-sm mb-2 line-clamp-2 min-h-[40px]">
                        {game.title}
                    </h3>

                    <div className="mb-3">
                        <span
                            className={`text-xs font-bold text-lime-500 ${
                                game.region === "GLOBAL"
                            }`}
                        >
                            {game.region}
                        </span>
                    </div>
                </div>

                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-gray-400 text-xs ">
                            From{" "}
                            <span className="line-through font-bold">
                                €{game.originalPrice.toFixed(2)}
                            </span>
                        </span>
                        <span className="text-green-500 text-xs font-bold">
                            {game.discountPercentage}%
                        </span>
                    </div>
                    <div className="text-white text-2xl font-bold flex items-center gap-2">
                        €{game.currentPrice.toFixed(2)}
                        <InformationCircleIcon className="text-gray-400 text-sm size-5" />
                    </div>
                </div>

                {game.hasCashback && (
                    <div className="text-green-500 text-xs font-bold mb-2">
                        Cashback: €{game.cashback.toFixed(2)}
                    </div>
                )}

                <div className="flex items-center gap-1 text-muted text-sm">
                    <HeartIcon className="size-4" />
                    <span>{game.favorites}</span>
                </div>
            </div>
        </div>
    );
};
