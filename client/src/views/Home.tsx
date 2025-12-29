import { useState, useEffect, useRef } from "react";
import { GameList } from "../components/GameList";
import { Navbar } from "../components/Navbar";
import { getList } from "../services/list";
import { type Game } from "../types/Game";

export const Home = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [games, setGames] = useState<Game[]>([]);
    const [count, setCount] = useState<number>(0);
    const [error, setError] = useState<string | null>(null);
    const isFetchingRef = useRef(false);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    const fetchGames = async () => {
        if (isFetchingRef.current) return;

        isFetchingRef.current = true;
        try {
            const { games: gamesList, count: gamesCount } = await getList(searchQuery);
            setGames(gamesList);
            setCount(gamesCount);
        } catch (err) {
            const errorMessage =
                err instanceof Error
                    ? err.message
                    : "Failed to load games. Please try again later.";
            setError(errorMessage);
            setGames([]);
            setCount(0);
        } finally {
            isFetchingRef.current = false;
        }
    };

    useEffect(() => {
        fetchGames();
    }, [searchQuery]);

    return (
        <div className="min-h-screen bg-background">
            <Navbar onSearch={handleSearch} />
            {error ? (
                <div className="w-full container mx-auto px-4 py-8">
                    <div className="text-red-400 px-4 py-3 rounded">
                        <p className="font-bold">Error</p>
                        <p>{error}</p>
                    </div>
                </div>
            ) : (
                <>
                    <div className="w-full container mx-auto px-4">
                        <div className="text-white mt-10">
                            <h2 className="text-md">
                                Results found: <span className="font-bold">{count}</span>
                            </h2>
                        </div>
                    </div>
                    <GameList games={games} />
                </>
            )}
        </div>
    );
};
