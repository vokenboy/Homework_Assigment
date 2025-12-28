import { GameCard } from "./GameCard";
import { type Game } from "../types/index";

interface GameListProps {
    games?: Game[];
}

const mockGames: Game[] = [
    {
        id: "1",
        title: "Split Fiction EA App Key (PC) GLOBAL",
        platform: "EA App",
        region: "GLOBAL",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=500&fit=crop",
        originalPrice: 49.99,
        discountPercentage: -18,
        currentPrice: 40.93,
        cashback: 4.5,
        favorites: 626,
        hasCashback: true,
        platformIcon: "EA App",
    },
    {
        id: "2",
        title: "Split Fiction (Xbox Series X|S) XBOX LIVE Key EUROPE",
        platform: "Xbox Live",
        region: "EUROPE",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=500&fit=crop",
        originalPrice: 49.99,
        discountPercentage: -32,
        currentPrice: 34.14,
        cashback: 3.76,
        favorites: 500,
        hasCashback: true,
        platformIcon: "Xbox Live",
    },
    {
        id: "3",
        title: "Split Fiction (Xbox Series X|S) XBOX LIVE Key GLOBAL",
        platform: "Xbox Live",
        region: "GLOBAL",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=500&fit=crop",
        originalPrice: 49.99,
        discountPercentage: -30,
        currentPrice: 35.15,
        cashback: 3.87,
        favorites: 1059,
        hasCashback: true,
        platformIcon: "Xbox Live",
    },
    {
        id: "4",
        title: "Split Fiction (Nintendo Switch 2) eShop Key EUROPE",
        platform: "Nintendo",
        region: "EUROPE",
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=500&fit=crop",
        originalPrice: 49.99,
        discountPercentage: -27,
        currentPrice: 36.25,
        cashback: 3.99,
        favorites: 288,
        hasCashback: true,
        platformIcon: "Nintendo",
    },
    {
        id: "5",
        title: "Split Fiction Steam Key GLOBAL",
        platform: "Steam",
        region: "GLOBAL",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=500&fit=crop",
        originalPrice: 49.99,
        discountPercentage: -25,
        currentPrice: 37.49,
        cashback: 4.12,
        favorites: 892,
        hasCashback: true,
        platformIcon: "Steam",
    },
    {
        id: "6",
        title: "Split Fiction PlayStation 5 Key EUROPE",
        platform: "PlayStation",
        region: "EUROPE",
        image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=400&h=500&fit=crop",
        originalPrice: 49.99,
        discountPercentage: -22,
        currentPrice: 38.99,
        cashback: 4.29,
        favorites: 734,
        hasCashback: true,
        platformIcon: "PlayStation",
    },
    {
        id: "7",
        title: "Split Fiction Epic Games Key GLOBAL",
        platform: "Epic Games",
        region: "GLOBAL",
        image: "https://images.unsplash.com/photo-1578374173705-64d4c9cf7e7e?w=400&h=500&fit=crop",
        originalPrice: 49.99,
        discountPercentage: -20,
        currentPrice: 39.99,
        cashback: 4.4,
        favorites: 567,
        hasCashback: true,
        platformIcon: "Epic",
    },
    {
        id: "8",
        title: "Split Fiction GOG Key GLOBAL",
        platform: "GOG",
        region: "GLOBAL",
        image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=400&h=500&fit=crop",
        originalPrice: 49.99,
        discountPercentage: -15,
        currentPrice: 42.49,
        cashback: 4.67,
        favorites: 421,
        hasCashback: true,
        platformIcon: "GOG",
    },
];

export const GameList = ({ games = mockGames }) => {
    return (
        <div className="w-full container mx-auto px-4 py-8">
            <div className="text-white mb-6">
                <h2 className="text-md">
                    Results found: <span className="font-bold">{games.length}</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {games.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </div>
    );
};
