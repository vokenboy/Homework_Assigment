import { type Game } from "../types/Game";
import { InformationCircleIcon, HeartIcon, PlusIcon } from "@heroicons/react/24/outline";

export const GameCard = ({ game }: { game: Game }) => {
    return (
        <div className="bg-card overflow-hidden cursor-pointer border-3 border-card-border">
            <div className="relative transition-all duration-300 hover:brightness-80">
                <img src={game.image} alt={game.title} className="w-full h-[440px] object-cover" />
                {game.hasCashback && (
                    <div className="absolute bottom-10 bg-info text-sm font-bold px-2 py-1.5 flex items-center gap-1 uppercase">
                        <PlusIcon className="size-4 translate-y-[-1/2px]" />
                        <span>Cashback</span>
                    </div>
                )}
                {game.platformIcon && (
                    <div className="absolute bottom-0 bg-black/50 backdrop-blur-md px-3 py-1 flex items-center justify-center w-full gap-2">
                        <img src={game.platformIcon} alt={game.platform} className="size-4" />
                        <span className="text-white text-xs font-bold">{game.platform}</span>
                    </div>
                )}
            </div>
            <div className="p-4">
                <div>
                    <h3 className="text-white font-bold text-sm mb-2 line-clamp-2 min-h-[40px]">
                        {game.title} {game.region}
                    </h3>

                    <div className="mb-3">
                        <span
                            className={`text-lx font-bold text-lime-500 uppercase ${
                                game.region === "Global"
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
                            {game.discountPercentage > 0 && (
                                <span className="line-through font-bold">
                                    €{game.originalPrice.toFixed(2)}
                                </span>
                            )}
                        </span>
                        {game.discountPercentage > 0 && (
                            <span className="text-green-500 text-xs font-bold">
                                {game.discountPercentage}%
                            </span>
                        )}
                    </div>
                    <div className="text-white text-2xl font-bold flex items-center gap-2">
                        €{game.currentPrice.toFixed(2)}
                        <div className="relative group">
                            <InformationCircleIcon className="text-gray-400 text-sm size-5 cursor-help" />
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 bg-gray-900 py-2 px-3 z-10">
                                <p className="text-sm text-white">
                                    Price is not final. Service fee applies at checkout
                                </p>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={`text-green-500 text-xs font-bold mb-2 ${
                        !game.hasCashback ? "invisible" : ""
                    }`}
                >
                    Cashback: €{game.cashback.toFixed(2)}
                </div>
                <div className="flex items-center gap-1 text-muted text-sm">
                    <HeartIcon className="size-4" />
                    <span>{game.favorites}</span>
                </div>
            </div>
        </div>
    );
};
